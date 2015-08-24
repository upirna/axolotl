_              = require 'underscore'
moment         = require 'moment'
SparklineChart = require 'pillow-js/lib/sparkline_chart.js'
RecordView     = require '../../../shared/views/record.coffee'
{ stfu }       = require '../../../shared/util/events.coffee'

class TraffickingStatusRecordView extends RecordView

    constructor: (options) ->
        super

        @page = options.page

    events: ->
        _.extend super, {
            'click .label [data-action=close]' : 'closeLabelClickHandler'
        }

    drawSparklineChart: (cube) ->
        if @account.get('canAnalyzeSomeFolders')
            @$('.trafficking-status')[0].classList.remove 'loading'

            if @platform.get 'lastAggregationTimestamp'
                lastAggregation = moment(@platform.get('lastAggregationTimestamp'), @timestampFormat)
                to              = lastAggregation
                current         = lastAggregation.clone().subtract('days', 7)
                
                data = []
                while current.valueOf() < to.valueOf()
                    data.push(cube.slice('utcDate', current.format(@dateFormat)).slice('utcHour', current.format('HH')).sessions)
                    current.add('hours', 8)
                
                # prevent scrolling to top when record has activity  - pagination issue
                if data.max() > 0
                    el = @$('.graph-container')[0]
                    el.innerHTML = ''
                    setTimeout (=>
                        sparkline = new SparklineChart
                            el       : el
                            data     : data
                            maxValue : (if data.max() < 100 then 100 else (data.max()+1))
                            width    : 42
                            height   : 20
                        
                        sparkline.render()
                    ), 0
                else
                    @$('.trafficking-status')[0].classList.add 'no-activity'
            
            else
                @$('.trafficking-status')[0].classList.add 'no-activity'
    
    closeLabelClickHandler: (ev) ->
        stfu ev
        @model.save { isArchived: false },
            success: =>
                @model.fetch()
                @trigger 'campaignUnarchived'
            error: (model, response) =>
                @notify "There was an error unarchiving the campaign: #{response}", 'error'
    
    getSparklineChartCube: ->
        console.error 'Should be implemented in child!'
    
    render: ->
        super
        
        if @model.get('canAnalyze')
            
            fulfilledLoadingOfStatusCubeCb = (statusCube) =>
                @drawSparklineChart @getSparklineChartCube(statusCube)
            
            rejectedLoadingOfStatusCubeCb = =>
                @$('.trafficking-status')[0].classList.remove('loading')
                @$('.trafficking-status')[0].classList.add('not-available')
            
            if @loadingOfStatusCube.promise.isFulfilled()
                fulfilledLoadingOfStatusCubeCb @loadingOfStatusCube.promise.inspect().value
            else if @loadingOfStatusCube.promise.isRejected()
                rejectedLoadingOfStatusCubeCb()
            else
                @loadingOfStatusCube.promise.then(
                    fulfilledLoadingOfStatusCubeCb,
                    rejectedLoadingOfStatusCubeCb
                )

module.exports = TraffickingStatusRecordView