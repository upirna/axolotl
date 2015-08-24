constants  = require '../../_compiled/constants.js'
countries  = require '../../_compiled/countries.js'
regions    = require '../../_compiled/regions.js'
goals      = require '../../_compiled/goals.js'
industries = require '../../_compiled/industries.js'
_          = require 'underscore'

class Report
    
    constructor: (@spec, @updateTimestamp, @rows, @notes) ->
    
    getSpec                  : -> @spec
    getUpdatedUntilTimestamp : -> @updateTimestamp
    getRows                  : -> @rows
    getNotes                 : -> @notes

    getRowsWithLabelValues: ->
        fields = @spec.dimensions.concat @spec.metrics

        getLabel = (fieldValue, fieldKey) ->
            getConstantById = constants["get#{fieldKey.charAt(0).toUpperCase()}#{fieldKey.substr(1)}ById"]
            if getConstantById?
                getConstantById(fieldValue).label
            else
                objectToSearch = switch fieldKey
                    when 'countryCode', 'billingCountry' then countries
                    when 'billingRegion'                 then regions
                    when 'goal'                          then goals
                    when 'industry', 'category'          then industries
                
                _.findWhere(objectToSearch, id: fieldValue)?.label or fieldValue

        @rows.map (row) ->
            if row.map? # row is array (compact mode)
                row.map (field, i) -> getLabel(field, fields[i])
            else        # row is object
                _.object(_.map row, (value, key) -> [key, getLabel(value, key)])

module.exports = Report