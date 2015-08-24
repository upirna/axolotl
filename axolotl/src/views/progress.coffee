BaseView = require '../../../shared/views/base.coffee'

class ProgressView extends BaseView
    
    templateName : 'progress'
    tagName      : 'td'
    className    : 'total-impressions'
    
    construct: ->
        super
        
        @model.bind 'change', @render, @
        
module.exports = ProgressView