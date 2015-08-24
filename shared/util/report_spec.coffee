_ = require 'underscore'

class ReportSpec
    
    constructor: (@metrics, @dimensions, @filters, @sorts, @limit) ->

    getMetrics    : -> @metrics
    getDimensions : -> @dimensions
    getFilters    : -> @filters
    getSorts      : -> @sorts
    getLimit      : -> @limit

    toApiUrl: () ->
        url  = 'analytics'
        url += '?metrics=' + @metrics.join(',')
        url += '&dimensions=' + @dimensions.join(',') if @dimensions and @dimensions.length
        
        url += Object.keys(@filters).map((field) =>
            value = @filters[field]
            return '&filters.' + field + '=' + (if value instanceof Array then value.map(encodeURIComponent).join(',') else encodeURIComponent(value))
        ).join('')
        
        url += '&sort=' + @sorts.join(',') if @sorts and @sorts.length
        url += '&limit=' + @limit if @limit
        
        url
        
module.exports = ReportSpec