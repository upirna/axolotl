BaseCollection = require '../base_collection.coffee'
Campaign       = require '../models/campaign.coffee'

class CampaignsCollection extends BaseCollection
    
    model  : Campaign
    url    : 'folders?clazz=Campaign'
    sortBy : 'name'
    
    @forAccount: (accountId, live = false) ->
        collection      = new @
        collection.url += "&accountId=#{accountId}"
        collection.url += '&live' if live
        collection

module.exports = CampaignsCollection