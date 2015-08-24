BaseCollection = require '../../shared/base_collection.coffee'
CustomAudience = require '../models/custom_audience.coffee'

class CustomAudiencesCollection extends BaseCollection

    model : CustomAudience
    url   : 'customAudiences'

    @forFolder: (folderId) ->
        collection      = new @
        collection.url += "?folderId=#{folderId}&isArchived=0"
        collection

module.exports = CustomAudiencesCollection
