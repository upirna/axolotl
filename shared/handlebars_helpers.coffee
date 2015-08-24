Handlebars = require 'hbsfy/runtime'
moment     = require 'moment'

module.exports = ->
    Handlebars.registerHelper 'ifEqual', (a, b, options) ->
        if a is b
            options.fn @
        else
            options.inverse @

    Handlebars.registerHelper 'unlessEqual', (a, b, options) ->
        if a isnt b
            options.fn @
        else
            options.inverse @

    Handlebars.registerHelper 'ifLt', (a, b, options) ->
        if a < b
            options.fn @
        else
            options.inverse @

    Handlebars.registerHelper 'ifGt', (a, b, options) ->
        if a > b
            options.fn @
        else
            options.inverse @

    Handlebars.registerHelper 'formatDate', (date) ->
        m = moment date
        s = m.format 'DD/MM/YYYY'
        new Handlebars.SafeString s

    Handlebars.registerHelper 'formatInt', (v) ->
        new Handlebars.SafeString v

    Handlebars.registerHelper 'isNull', (obj, options) ->
        if obj is null then options.fn @ else options.inverse @

    Handlebars.registerHelper 'unlessNull', (obj, options) ->
        if obj isnt null then options.fn @ else options.inverse @

    Handlebars.registerHelper 'stringSize', (string, normalMaxLength = 24, smallMaxLength = 38) ->
        # use string length to set the appropriate size
        nameLength = string.length

        if nameLength > normalMaxLength and nameLength <= smallMaxLength
            nameSize = 'small'
        else if nameLength > smallMaxLength
            nameSize = 'smaller'
        else nameSize = 'normal'

        nameSize

    Handlebars.registerPartial 'svg-icons', require './templates/svg-icons.thtml'
