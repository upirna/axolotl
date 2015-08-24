Backbone = require 'backbone'

class Users extends Backbone.Collection

    url: 'users'

    @onlyCampaignManagers: ->
        new @

    @forAccount: ->
        new @

module.exports = Users
