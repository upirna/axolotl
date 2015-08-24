Backbone = require 'backbone'

class Placements extends Backbone.Collection

    url : 'placements'

    @forFolder: ->
        new @

module.exports = Placements
