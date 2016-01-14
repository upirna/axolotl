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

        Q.all([fetchSessionsCube.promise, fetchStatusCube.promise]).then (cubes) ->
            start = null
            last  = 0

            class Point
                x : null
                y : null

                constructor: (x, y) ->
                    @x = x
                    @y = y

            objects = []
            algo = (timestamp) =>
                start = timestamp unless start
                progress = timestamp - start

                if progress - last > 25
                    objects = []
                    for z in [0...500]
                        for y in [0...50]
                            objects.push(
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2),
                                new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2), new Point(1,2)
                            )

                    last = progress

                window.requestAnimationFrame(algo)

            window.requestAnimationFrame algo

        fetchSessionsCube.promise.then (sessionsCube) =>
            @set
                sessionsCube : sessionsCube
            , silent : yes
        
        fetchStatusCube.promise.then (statusCube) =>
            @set
                statusCube : statusCube
            , silent : yes

        Q.all([fetchSessionsCube.promise, fetchStatusCube.promise]).then (cubes) ->
             for z in [0...1]
                 for y in [0...300]
                     cubes[0].slice('campaignId')
                     cubes[1].slice('utcDate')
        
        fetchingOfRequiredResources

    compare: ->
        @get('campaigns').compare
        
module.exports = CampaignsPage