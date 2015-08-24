module.exports = ->
    $          = require 'jquery'
    Backbone   = require 'backbone'
    Backbone.$ = $ # init

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

    # Override Backbone's toJSON to go deeper
    Backbone.Model::toJSON = -> toJSON @attributes
