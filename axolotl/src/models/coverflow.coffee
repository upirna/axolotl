moment    = require 'moment'
BaseModel = require '../../../shared/models/base_model.coffee'

class CoverFlowModel extends BaseModel
    
    defaults:
        counter          : 0
        lastChange       : null
        startingPosition : 0
        minPosition      : 0
        maxPosition      : Infinity
        currentPosition  : 0
    
    constructor: ->
        super
        
        @bind 'change:counter', ->
            if Math.abs(@get('counter')) is 1
                  
                @ticker = setInterval( =>
                    
                    @trigger 'moveCoverFlow', @_getTargetPosition()
                    
                    if moment().diff(@get('lastChange')) > 150
                        # in case that last change was before 150ms, assume that
                        # this is the end of one coverflow move
                        clearInterval @ticker
                        
                        @set
                            counter : 0
                            startingPosition : @get('currentPosition')
                        , silent : yes
                , 40)
            
            @set
                lastChange : moment()
            , silent: yes

    _getTargetPosition: ->
        
        counter = @get('counter')
        min = @get('minPosition')
        max = @get('maxPosition')
        
        scaleFactor = Math.round(counter / 2)
        
        if counter < 5 and counter > 0
            scaleFactor = 1
        
        if counter > -5 and counter < 0
            scaleFactor = -1
        
        targetPosition = @get('startingPosition') + scaleFactor
        
        if targetPosition < min
            min
        else if targetPosition > max
            max
        else
            targetPosition
            
module.exports = CoverFlowModel