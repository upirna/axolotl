_                           = require 'underscore'
TraffickingStatusRecordView = require './trafficking_status_record.coffee'
industries                  = require '../../../_compiled/industries.js'
CampaignProgressView        = require './progress.coffee'
Progress                    = require '../models/progress.coffee'
{ meh, noop, stfu, gtfo }   = require '../../../shared/util/events.coffee'

h             = require 'virtual-dom/h'
diff          = require 'virtual-dom/diff'
patch         = require 'virtual-dom/patch'
createElement = require 'virtual-dom/create-element'
VNode         = require 'virtual-dom/vnode/vnode'
parser        = require 'html2hscript'

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
        columns = []

        columns.push(h("td.bumper-cell", [ "", h("div.cell-wrapper", ["", h("div.cell-wrapper-wrapper"), ""]), "" ]))
        columns.push(h("td.check-record", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "", h("label.checkbox.small-checkbox", [ "", h("input", {"attributes":{"type":"checkbox"}}), "", h("span"), "" ]), "" ]), "" ]), "" ]))
        columns.push(h("td.campaign", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "", h("h2.normal", [ "", h("a.item-name", {"attributes":{"href":"#campaigns/bc66b379"}}, [ "    ", h("span", {"attributes":{"title":"Zubi Dunkin Donuts LTO"}}, [ "Zubi Dunkin Donuts LTO" ]), "" ]), "" ]), "\n", h("div.pieces", [ "", h("span.piece", [ "16 creatives" ]), "    ", h("span.piece", [ "ID: bc66b379" ]), "" ]), "" ]), "" ]), "" ]))
        columns.push(h("td.industry", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "", h("p", {"attributes":{"title":"Quick Service Restaurants (QSR)"}}, [ "Quick Service Restaurants (QSR)" ]), "" ]), "" ]), "" ]))
        columns.push(h("td.last-change", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "30/04/2015" ]), "" ]), "" ]))
        columns.push(h("td.flight-date", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "18/03/2015 - 31/12/2015" ]), "" ]), "" ]))
        columns.push(h("td.trafficking-status.loading", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper", [ "", h("a.live", {"attributes":{"href":"#analytics/bc66b379"}}), "        ", h("a.graph-container", {"attributes":{"href":"#analytics/bc66b379"}}, [ "", "        " ]), "    " ]), "" ]), "" ]))
        columns.push(h("td.space", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper"), "" ]), "" ]))
        columns.push(h("td.bumper-cell", [ "", h("div.cell-wrapper", [ "", h("div.cell-wrapper-wrapper"), "" ]), "" ]))

        tree = new VNode("tr", {"className" : "campaign-record"}, columns)
        tree
    
    newCreativeClickHandler: (ev) ->
        stfu ev

        alert 'Create new creative...'
    
    getSparklineChartCube: (statusCube) ->
        statusCube.filter 'campaignId', @model.id

module.exports = CampaignRecordView