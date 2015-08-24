BaseModel = require './base_model.coffee'

class Partner extends BaseModel
    
    urlRoot : 'partners'
    
    defaults:
        name                      : null
        accountId                 : null
        isBrand                   : false
        isAgency                  : false
        isSupplier                : false
        allowCookies              : false
        creationTimestamp         : null
        lastModificationTimestamp : null
    
    getType: ->
        labels = []

        labels.push 'Media Agency'     if @get('isAgency')
        labels.push 'Brand/Advertiser' if @get('isBrand')
        labels.push 'Supplier'         if @get('isSupplier')

        labels.join ', '
    
    toJSON: ->
        data      = super
        data.type = @getType()
        data

module.exports = Partner