$        = require 'jquery'
Backbone = require 'backbone'

module.exports = ->
    
    Backbone.Events.one = (ev, callback, context) ->
        @bind ev, =>
            @unbind ev, callback
            callback.apply context, arguments
    
    Backbone.Events.relayEvents = (origin, events) ->
        if typeof events is 'string'
            origin.bind events, => @trigger.apply @, [events].concat Array.prototype.slice.call arguments
        else
            @relayEvents origin, event for event in events
        return
    
    toJSON = (value) ->
        return value if not value or typeof value isnt 'object'
    
        obj = {}
        for own attr, val of value
            if val and val.toJSON
                obj[attr] = val.toJSON()
            else if $.isArray val
                obj[attr] = (toJSON(e) for e in val)
            else if $.isPlainObject val
                obj[attr] = toJSON val
            else
                obj[attr] = val
        obj
    
    Backbone.Model::toJSON = -> toJSON @attributes
    
    # fixed model save so changedAttributes works as expected
    # see: https://github.com/documentcloud/backbone/pull/391
    Backbone.Model::save = (attrs, options) ->
        options or= {}
        changedAttributes = @changedAttributes attrs
        return false if attrs and not @set attrs, options

        success = options.success
        options.success = (resp, status, xhr) =>
            return false unless @set @parse(resp, xhr), options
            success @, resp, xhr if success
            return
        
        onError = options.error
        options.error = (resp) =>
            if onError
                onError @, resp, options
            else
                @trigger 'error', @, resp, options
        method = if @isNew() then 'create' else 'update'
        (@sync || Backbone.sync).call @, method, @, options, changedAttributes
