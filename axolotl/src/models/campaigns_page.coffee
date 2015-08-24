Q           = require 'q'
moment      = require 'moment'
Creatives   = require '../../../shared/collections/creatives.coffee'
Campaigns   = require '../../../shared/collections/campaigns.coffee'
Partners    = require '../../../shared/collections/partners.coffee'
Users       = require '../../../shared/collections/users.coffee'
UserGroups  = require '../../../shared/collections/user_groups.coffee'

Cube        = require '../../../shared/util/Cube.js'

RecordsPage = require '../../../shared/models/records_page.coffee'

class CampaignsPage extends RecordsPage

    localStorageKey : 'CampaignsPage'

    defaults:
        campaigns             : null
        
        platform              : null
        api                   : null
        collection            : null
        account               : null
        curretnUser           : null
        users                 : null
        userGroups            : null
        currentUser           : null
        recentCreatives       : null
        partners              : null
        loadingOfStatusCube   : null
        loadingOfSessionsCube : null
        sessionsCube          : null
        statusCube            : null
        
        sortBy                : 'lastModificationTimestamp'
        desc                  : yes
    
    constructor: ->
        super
        
        if !@get('sessionsCube') and @get('sortBy') is 'servedSessions'
            @set
                sortBy : 'lastModificationTimestamp'
                desc   : yes

    fetch: (options) ->
        api             = @get 'api'
        account         = @get 'account'
        platform        = @get 'platform'
        currentUser     = @get 'currentUser'
        users           = Users.forAccount account.id, account.get('ownerUserId')
        userGroups      = UserGroups.forAccount account.id
        recentCreatives = Creatives.forAccountAndRecentlyOpened account.id
        partners        = Partners.forAccount account.id
        campaigns       = Campaigns.forAccount account.id
        statusCube      = null
        sessionsCube    = null

        fetchUsers           = users.fetch()
        fetchUserGroups      = userGroups.fetch()
        fetchRecentCreatives = recentCreatives.fetch()
        fetchPartners        = partners.fetch()
        fetchCampaigns       = campaigns.fetch()
        fetchStatusCube      = Q.defer()
        fetchSessionsCube    = Q.defer()

        fetchingOfRequiredResources = Q.all([fetchUsers, fetchUserGroups, fetchRecentCreatives, fetchPartners, fetchCampaigns]).then(
            =>
                recentCreatives.reset(recentCreatives.slice(0, 20))
                campaignIds = campaigns.where(canAnalyze : true).pluck('id')
                
                if campaignIds.length
                    api.getCube(
                        ['sessions']
                        ['campaignId']
                        { campaignId: campaignIds }
                        (error, cube) -> if error then fetchSessionsCube.reject(new Error(error)) else fetchSessionsCube.resolve(cube)
                    )
                
                if platform.get('lastAggregationTimestamp')
                    dateFrom = moment(platform.get('lastAggregationTimestamp'), 'YYYY-MM-DD HH:mm:ss').subtract('days', 8)
                    api.getCube(
                        ['sessions']
                        ['campaignId', 'utcDate', 'utcHour']
                        { campaignId: campaignIds, 'utcDate.gte': dateFrom.format('YYYY-MM-DD') }
                        (error, cube) -> if error then fetchStatusCube.reject(new Error(error)) else fetchStatusCube.resolve(cube)
                    )
                else
                    fetchStatusCube.reject new Error("Last aggregation timestamp is needed.")
                
                @set
                    users                 : users
                    userGroups            : userGroups
                    recentCreatives       : recentCreatives
                    partners              : partners
                    campaigns             : campaigns
                    loadingOfStatusCube   : fetchStatusCube
                    loadingOfSessionsCube : fetchSessionsCube

                options?.success?()
            ->
                throw {
                    name    : "CampaignDoesNotExist"
                    message : "Campaign does not exist."
                }
        ).fail(
            (error) ->
                console.error error
                options?.error?(error)
        )
        
        fetchSessionsCube.promise.then (sessionsCube) =>
            @set
                sessionsCube : sessionsCube
            , silent : yes
        
        fetchStatusCube.promise.then (statusCube) =>
            @set
                statusCube : statusCube
            , silent : yes
        
        fetchingOfRequiredResources

    compare: ->
        @get('campaigns').compare
        
module.exports = CampaignsPage