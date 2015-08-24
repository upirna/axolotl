Backbone = require 'backbone'

class UserPreference extends Backbone.Model
    defaults:
        sortBy    : null
        desc      : false

module.exports = UserPreference