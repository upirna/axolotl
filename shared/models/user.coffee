BaseModel = require './base_model.coffee'

class User extends BaseModel
    
    urlRoot : 'users'
    
    defaults:
        id                : null
        email             : ''
        pendingEmail      : ''
        firstName         : ''
        lastName          : ''
        preferences       : {}
        timeFormat        : null
        locale            : null
        timezone          : null
        creationTimestamp : null
        claimed           : null
        serviceLists      : []
        newsletter        : null
            
    getFullName: ->
        @get('firstName') + ' ' + @get('lastName')
    
    getCustomTemplate: (customTemplateVariable) ->
        customTemplate = @get('preferences')?[customTemplateVariable]
        
        unless customTemplate
            customTemplate =
                id         : 'custom'
                label      : 'Custom'
                metrics    : []
                dimensions : []
        
        customTemplate
        

module.exports = User