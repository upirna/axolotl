$        = require 'jquery'
BaseView = require './base.coffee'
{ stfu } = require '../../shared/util/events.coffee'

class DialogView extends BaseView
    
    tagName               : 'form'
    overlayStyle          : ''
    dismissOnOverlayClick : on
    dismissOnEscKeyPress  : on
    centered              : off
    
    constructor: (options) ->
        super
        @$el.on 'click', '[data-action=closeDialog]', (ev) => @closeDialog ev

    render: ->
        super

        unless @inDOM()
            @$el.appendTo('body')
            
            $(document).bind 'keyup', @onKeyPress

            @overlay = $('<div/>').addClass("overlay #{@overlayStyle}").insertBefore @el
            if @dismissOnOverlayClick
                @overlay.one 'click', (ev) =>
                    stfu ev
                    @close()

        @positionInCenter() if @centered
        
    onKeyPress: (ev) =>
        if ev.keyCode is 27
            if @dismissOnEscKeyPress
                @close()
    
    positionInCenter: ->
        $window = $ window

        ww = $window.width()
        wh = $window.height()
        
        ew = @$el.outerWidth true
        eh = @$el.outerHeight true

        sx = $window.scrollLeft()
        sy = $window.scrollTop()

        x = sx + (ww - ew) / 2
        y = sy + (wh - eh) / 2

        x = x.clamp sx
        y = y.clamp sy

        @$el.css
            left : x
            top  : y

    # Expects to receive an element to which to align the dialog
    positionAt: (ref, correction) ->
        ref = $ ref unless ref.jquery?
        @$el.css @computePosition ref, correction

        # Listen for sticky header change of state and reposition accordingly
        $body = $ 'body'
        $body.on 'stickyHeaderOn stickyHeaderOff', =>
            $body.unbind 'stickyHeaderOn stickyHeaderOff'
            @positionAt ref, correction
    
    computePosition: (ref, correction) =>
        # If ref is a button inside a sticky header, dialog should be fixed
        pos = if ref.isFixed() then 'fixed' else 'absolute'

        offset = if pos is 'fixed' then ref.position() else ref.offset()

        x = offset.left - 5 + (correction?.x or 0)
        y = offset.top  - 5 + (correction?.y or 0)

        $window = $ window
        @$el.css top: 0, left: 0

        rw = ref.outerWidth true
        rh = ref.outerHeight true
        
        ww = $window.width()
        ww = 1600 if ww > 1600 # max content width
        wh = $window.height()
        
        ew = @$el.outerWidth true
        eh = @$el.outerHeight true

        sx = if pos is 'fixed' then 0 else $window.scrollLeft()
        sy = if pos is 'fixed' then 0 else $window.scrollTop()
        
        if x + ew > ww + sx
            x -= ew - rw - 10

        if y + eh > wh + sy
            y -= eh - rh - 10

        x = x.clamp sx
        y = y.clamp sy

        { position: pos, left: x, top: y }
    
    destroy: ->
        super
        $(document).unbind 'keyup', @onKeyPress
            
    close: ->
        @overlay.remove() if @overlay?
        @destroy()
        
    closeDialog: (ev) ->
        stfu ev
        @close()

    showErrors: (errors) ->
        errorContainer = @$('.error-msg').empty()
        if errors.length is 0
            errorContainer.empty().hide()
            return

        for error in errors
            errorContainer.append "<p>#{error.message}</p>"
            if error.fields and error.fields.length > 0
                @showFieldInvalid field for field in error.fields

        errorContainer.show()
        @$("input.invalid:first").focus()

    hideErrors: ->
        @$('.error-msg').empty().hide()
        @$('.invalid').removeClass 'invalid'

module.exports = DialogView