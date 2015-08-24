BaseModel = require '../../../shared/models/base_model.coffee'

class Progress extends BaseModel
    
    defaults:
        servedUnits       : null
        plannedUnits      : null
        progress          : null
        isProgressLoaded  : no
    
    constructor: ->
        super
        
        @bind 'change:plannedUnits change:servedUnits', =>
            servedUnits  = @get('servedUnits')
            plannedUnits = @get('plannedUnits')
            
            @set
                progress : if servedUnits and plannedUnits then Math.round(servedUnits / plannedUnits * 100) else 0
            , silent : yes
        

module.exports = Progress
