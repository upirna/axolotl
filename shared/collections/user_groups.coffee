Backbone = require 'backbone'

class UserGroups extends Backbone.Collection

    url: 'userGroups'

    @forAccount: ->
        new @

module.exports = UserGroups
