$            = require 'jquery'
_            = require 'underscore'
BaseView     = require './base.coffee'
GridTextarea = require '../../shared/util/grid_textarea.coffee'
{ stfu }     = require '../../shared/util/events.coffee'

class RecordView extends BaseView

    constructor: ->
        super
        
        @model.bind 'change:name', => @render()
    
    events: ->
        'change  .check-record input'          : 'handleToggleChange'
        'click   [data-action=toggleEditable]' : 'handleToggleEditable'
        'keydown [data-action=editName]'       : 'handleEditName'
        'save    [data-action=editName]'       : 'handleNameSave'
    
    render: ->
        super
        @$el.attr 'data-entity-id', @model.id

    markAdded: ->
        @$el.find('.content-loading').removeClass('content-loading').addClass('no-activity').end().addClass 'added'
        setTimeout (=>
            @$el.one(
                'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'
                =>
                    @$el.show().removeClass 'added removed'
                    @trigger 'added'
            )
        ), 0

    markRemoved: ->
        @$el.addClass 'removed'
        setTimeout (=>
            @$el.one(
                'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'
                =>
                    @$el.hide().removeClass 'added removed'
                    @trigger 'removed'
            )
        ), 0

    highlight: ->
        @$el.addClass('highlight')
        setTimeout (=>
            @$el.on(
                'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd'
                => @$el.removeClass 'highlight'
            )
        ), 0

    scrollAndHighligh: ->
        screenHeight = $('html body').height()
        elementHeight = @$el.height()
        offset = @$el.offset().top - screenHeight + elementHeight

        if offset > 0
            $('html,body').animate { scrollTop: offset }, 500

        @highlight()

    isSelected: ->
        @$('.check-record input').is ':checked'

    select: (silent = no) ->
        $input = @$('.check-record input')
        $input.attr('checked', true)
        $input.trigger('change') unless silent
    
    deselect: (silent = no) ->
        $input = @$('.check-record input')
        $input.attr('checked', false)
        $input.trigger('change') unless silent

    handleToggleChange: (ev) ->
        stfu ev
        
        @trigger 'selectionChange', {
            recordId : @model.id
            selected : @$(ev.target).is(':checked')
        }

    handleNameSave: (ev) ->
        $name   = @$('.item-edit-name').first()
        oldName = @model.get 'name'
        newName = $name.val().normalize().trim()
        
        if oldName is newName
            @clearFieldState $name
            return
        
        @model.set
            name : newName
        
        @markFieldUpdating @$('.item-edit-name').first()
        
        @model.save(
            null
            {
                success: =>
                    @markFieldUpdated @$('.item-edit-name').first()
                error  : (model, response) =>
                    @model.set name: oldName
                    @clearFieldState @$('.item-edit-name').first()
                    @notify "An error occurred: #{response}", 'error'
            }
        )
    
    handleToggleEditable: (ev) ->
        stfu ev

        $btn  = $ ev.currentTarget
        $elem = $btn.closest 'h2'
        $name = $btn.siblings '.item-edit-name'

        $elem.toggleClass 'editable', on
        
        $name
            .focus()
            .val(@model.get 'name')
            .select()
            .one 'blur', ->
                $name.trigger 'save'
                $elem.toggleClass 'editable', off

        new GridTextarea
            el: $name

    handleEditName: (ev, selector = 'h2') ->
        return unless ev.which is 13 or ev.which is 27
        
        stfu ev

        $name = @$ ev.currentTarget
        $name.unbind('blur').closest(selector).toggleClass 'editable', off
        $name.trigger 'save' if ev.which is 13

module.exports = RecordView