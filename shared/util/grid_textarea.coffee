$ = require 'jquery'
Backbone = require 'backbone'

class GridTextarea extends Backbone.View
    events: ->
        'keyup' : 'resize'

    constructor: (options) ->
        super
        
        @$el = $ @el
        
        if @$el.attr('data-no-resize')? # use "data-no-resize" attribute to disable resizing
            @unbind()
            return

        $title = @$el.closest 'h2'
        return unless $title

        switch
            when $title.is '.smaller'  then @fontSize = 'smaller'
            when $title.is '.small'    then @fontSize = 'small'
            else                             @fontSize = 'normal'

        @resize()

    resize: ->
        @$el.css 'height' : '' # clear height
        scrollHeight = @el.scrollHeight

        switch @fontSize
            when 'smaller'
                switch
                    when scrollHeight >  32 then height = 48
                    when scrollHeight >  19 then height = 31
                    when scrollHeight <= 19 then height = 17
            when 'small'
                switch
                    when scrollHeight >  35 then height = 50
                    when scrollHeight >  18 then height = 32
                    when scrollHeight <= 18 then height = 14
            when 'normal'
                switch
                    when scrollHeight >  37 then height = 55
                    when scrollHeight >  19 then height = 38
                    when scrollHeight <= 19 then height = 17
                
        @$el.css 'height' : height if height

module.exports = GridTextarea