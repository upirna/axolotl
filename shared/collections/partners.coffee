BaseCollection = require '../base_collection.coffee'
Partner        = require '../models/partner.coffee'

class PartnersCollection extends BaseCollection

    model  : Partner
    url    : 'partners'
    sortBy : 'name'
        
    @forAccount: (accountId)->
        partners = new @
        partners.url += "?accountId=#{accountId}"
        partners

    @whereIn : (values) ->
        partners = new @
        partners.url += "?in=#{values.join(',')}"
        partners

module.exports = PartnersCollection