do require '../../shared/init.coffee'
do require '../../shared/handlebars_helpers.coffee'

$              = require 'jquery-commonjs'
PlaygroundView = require './views/playground.coffee'

view = new PlaygroundView
view.render()

$('#app').html view.$el
