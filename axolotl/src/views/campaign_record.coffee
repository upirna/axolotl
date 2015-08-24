_                           = require 'underscore'
TraffickingStatusRecordView = require './trafficking_status_record.coffee'
industries                  = require '../../../_compiled/industries.js'
CampaignProgressView        = require './progress.coffee'
Progress                    = require '../models/progress.coffee'
{ meh, noop, stfu, gtfo }   = require '../../../shared/util/events.coffee'

class CampaignRecordView extends TraffickingStatusRecordView
    
    tagName      : 'tr'
    templateName : 'campaign-record'
    
    constructor: (options) ->
        {
            @account
            @loadingOfSessionsCube
            @loadingOfStatusCube
            @showAnalytics
            @platform
            @api
        } = options
        
        super
        
        @progress = new Progress
        
        @progressView = @createView CampaignProgressView, model : @progress
        @progressView.render()
        
        if @model.get 'canAnalyze'
            
            fulfilledLoadingOfSessionsCubeCb = (sessionsCube) =>
                @model.set
                    servedSessions : sessionsCube.filter('campaignId', @model.id).sessions
                , silent : yes
                
                @progress.set
                    servedUnits      : @model.get('servedSessions')
                    plannedUnits     : @model.get('plannedUnitsByBillingMetric').sessions
                    isProgressLoaded : yes
                
                @progressView.render()
            
            rejectedLoadingOfSessionsCubeCb = =>
                @progress.set
                    servedSessions    : null
                    estimatedSessions : @model.get('effectiveEstimatedImpressions')
                    isProgressLoaded  : yes
                
                @progressView.render()
            
            if @loadingOfSessionsCube.promise.isFulfilled()
                fulfilledLoadingOfSessionsCubeCb @loadingOfSessionsCube.promise.inspect().value
            else if @loadingOfSessionsCube.promise.isRejected()
                rejectedLoadingOfSessionsCubeCb()
            else
                @loadingOfSessionsCube.promise.then(
                    fulfilledLoadingOfSessionsCubeCb,
                    rejectedLoadingOfSessionsCubeCb
                )

        @model.bind 'change:isArchived',    => @render()
        @model.bind 'change:name',          => @render()
        @model.bind 'change:creativeCount', => @render()

    events: ->
        _.extend super, {
            'click   [data-action=editCustomAttribute]' : 'handleEditCustomAttribute'
        }

    getTemplateData: ->
        data                  = super
        data.account          = @account.toJSON()
        data.showCreateLink   = data.canCreateCreatives and not data.isArchived
        data.industryName     = industries.filter((industry) -> industry.id is data.industry)[0].label
        data
    
    render: ->
        super
        
        @$el.find('.space').after @progressView.$el
    
    newCreativeClickHandler: (ev) ->
        stfu ev

        alert 'Create new creative...'
    
    getSparklineChartCube: (statusCube) ->
        statusCube.filter 'campaignId', @model.id

module.exports = CampaignRecordView