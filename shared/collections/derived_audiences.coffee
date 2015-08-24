BaseCollection  = require '../../shared/base_collection.coffee'
DerivedAudience = require '../models/derived_audience.coffee'

class DerivedAudiencesCollection extends BaseCollection

    model : DerivedAudience
    url   : 'derivedAudiences'

    @forFolder: (folderId) ->
        collection      = new @
        collection.url += "?folderId=#{folderId}&isArchived=0"
        collection

module.exports = DerivedAudiencesCollection
