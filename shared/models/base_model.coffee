Backbone = require 'backbone'
moment   = require 'moment'

getUrl = (object) ->
    return null unless object and object.url
    if typeof object.url is 'function' then object.url() else object.url

urlError = -> throw new Error 'A "url" property or function must be specified'

class BaseModel extends Backbone.Model

    # Some POST, PUT or DELETE requests may allow option to return
    # model's representation (instead of no content).
    # Setting this to true for a model will enable this option.
    returnRepresentation: no

    # Do not save if API returns warnings
    strict : no

    # default date and time format received by api
    dateFormat: 'YYYY-MM-DD'
    timeFormat: 'YYYY-MM-DD hh:mm:ss'

    url: ->
        base = getUrl(this.collection) || this.urlRoot || urlError()
        base = base.slice(0, idx) if (idx = base.indexOf('?')) isnt -1
        return base if @isNew()
        base + (if base.charAt(base.length - 1) is '/' then '' else '/') + encodeURIComponent(@id)

    toServerJSON : ->
        @toJSON()

BaseModel.convertTimeFields = ['creationTimestamp', 'lastModificationTimestamp']

module.exports = BaseModel