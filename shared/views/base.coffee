$          = require 'jquery'
moment     = require 'moment'
Handlebars = require 'handlebars'
Backbone   = require 'backbone'
BaseModel  = require '../models/base_model.coffee'
Account    = require '../models/account.coffee'
Locale     = require '../util/locale.coffee'

SelectBox = require 'cegli/lib/forms/selectbox'

{ meh, noop, stfu, gtfo } = require '../util/events.coffee'

viewIdSequence = 1

templates = {
    'campaign-record'   : require '../../axolotl/templates/campaign-record.thtml'
    'campaigns-records' : require '../../axolotl/templates/campaigns-records.thtml'
    'campaigns'         : require '../../axolotl/templates/campaigns.thtml'
    'progress'          : require '../../axolotl/templates/progress.thtml'
    'coverflow'         : require '../../axolotl/templates/coverflow.thtml'

    'default-layout'    : require '../templates/default-layout.thtml'
}


class BaseView extends Backbone.View
    
    dateFormat      : 'YYYY-MM-DD'
    timestampFormat : 'YYYY-MM-DD HH:mm:ss'
    
    constructor: ->
        # re-apply Events mixin
        $.extend @, Backbone.Events
        
        @localizedDateFormat      = Locale.getDateFormat()
        @localizedShortDateFormat = Locale.getShortDateFormat()

        super
        
        @_childViews = new Backbone.Collection

        templateName = @templateName or @id
        if templateName
            @template = (context) ->
                templates[templateName](context)

        @rendered    = false

        @$el = $ @el

    createView: (ViewConstructor, options) ->
        view = new ViewConstructor options
        @addChildView view
        view
    
    addChildView: (view) ->
        view.id or= "view-#{viewIdSequence++}"
        @relayEvents view, 'notification'
        @relayEvents view, 'navigate'
        @_childViews.add { view }
        view.bind 'destroy', (childView) => @removeChildView childView
    
    removeChildView: (view, destroy) ->
        for entry in @_childViews.models
            v = entry.get 'view'
            if view is v
                if destroy
                    view.destroy()
                else
                    @_childViews.remove entry
                break
        return
    
    removeAllChildViews: (destroy) ->
        if destroy
            while entry = @_childViews.at 0
                view = entry.get 'view'
                view.destroy()
        else
            @_childViews.reset()
        return
    
    addChildToDOM: (view) ->
        @$el.append view.el
    
    renderChildView: (view, addToDOM) ->
        view.render()
        @addChildToDOM view if addToDOM
    
    eachChild: (fn) ->
        @_childViews.each (entry) -> fn entry.get 'view'
    
    templateInTextForm: ->
        @template @getTemplateData() if @template
    
    assignHtml: ->
        @$el.html @templateInTextForm()
    
    render: ->
        @assignHtml()

        # Special multi-selects with the "all" option
        # @$('select.option-all').addOptionAll()
        @$('.reform-selectbox').each (i, el) -> new SelectBox el

        @rendered = true

    buildDatepickers: (showButton = yes) ->
        
        if showButton
            showOn          = 'button'
            buttonImage     = 'img/calendar.png'
            buttonText      = 'Select date'
            buttonImageOnly = true
        else
            showOn          = 'focus'
            buttonImage     = null
            buttonText      = null
            buttonImageOnly = false
        
        
        $(@el).find('input.date-picker').each (i, el) =>
            $el = $(el)
            
            minDate = $el.data().minDate or null
            maxDate = $el.data().maxDate or null
            message = $el.data().message or null

            customClass = $el.attr('class').replace('date-picker', '').trim()
            
            $el.datepicker
                showOn          : showOn
                buttonImage     : buttonImage
                buttonText      : buttonText
                buttonImageOnly : buttonImageOnly
                showAnim        : ''
                firstDay        : Locale.getFirstDay()
                dateFormat      : Locale.getJqueryUiDatePickerFormat()
                minDate         : if minDate then moment(minDate, @dateFormat).toDate() else null
                maxDate         : if maxDate then moment(maxDate, @dateFormat).toDate() else null
                beforeShowDay   : (date) ->
                    future = $(@).hasClass 'future'
                    past   = $(@).hasClass 'past'
                    today  = not past and not future
                    
                    current = new Date()
                    difference = date - current
                    
                    selectable = (past and difference <= 0) or (future and difference >= 0) or today

                    className = 'in-future' if difference > 0
                    className = 'in-past'   if difference < 0

                    [selectable, className]
                beforeShow      : (input, inst) ->
                    $(inst.dpDiv).addClass customClass
                    if message
                        setTimeout ( ->
                            $(inst.dpDiv).append("<div class='ui-message'>#{message}</div>")
                        ), 0
                
            $el.datepicker('disable') if $el.attr('disabled')
    
    getViewModel: ->
        @model
    
    getChildViewForModel: (model) ->
        @_childViews.pluck('view').filter((view) -> view.model is model)[0]

    getChildViewForDOMElement: (el) ->
        @_childViews.pluck('view').filter((view) -> view.el is el)[0]

    getTemplateData: ->
        viewModel = @getViewModel()
        if viewModel then viewModel.toJSON() else {}
    
    getField: (name) ->
        fields = @$ "[data-field='#{name}']"
        @eachChild (view) ->
            fields = fields.filter -> not $.contains view.el, @
        fields
    
    showFieldInvalid: (name) ->
        field = @$("[name=#{name}]")
        if field.is 'select'
            field.closest('.dialog-selectbox')
                .addClass 'invalid'
        else if field.is '.reformed'
            field.closest('.dialog-autocompletebox')
                .addClass 'invalid'
        else field.addClass 'invalid'

    notify: (text, type) ->
        @trigger 'notification', text, type, @

    decorateNumberWithSeparator: (value) ->
        value = value.replace /,/g,  '<span class="separator">,</span>'
        value.replace /\./g, '<span class="separator">.</span>'

    clearFieldState: (el) ->
        $(el).closest('.field, td, .buttons, .category-details').removeClass 'updating updated error'

    markFieldUpdating: (el) ->
        $field = @clearFieldState el
        $field.toggleClass 'updating', on

    markFieldUpdated: (el) ->
        $field = @clearFieldState el
        
        # Reset CSS animation. If update-indicator is not created again,
        # green tick shows only the first time (in firefox, chrome and safari are ok).
        $parentNode = $field.find('.update-indicator').parent()
        $field.find('.update-indicator').remove()
        $parentNode.append($('<div class="update-indicator"></div>'))
        
        $field.toggleClass('updated', on)
              .on 'webkitAnimationEnd animationend', -> $field.removeClass 'updated'

    markFieldError: (el, state = on, msg) ->
        if typeof state is 'string' and not msg?
            msg   = state
            state = on
        
        $field = @clearFieldState el
        $field.toggleClass 'error', state

        $msg = $field.closest('fieldset').find('.error-msg')
        if msg? then $msg.text(msg) else $msg.empty()

    inDOM: ->
        !!@el.parentNode

    destroy: ->
        @removeAllChildViews true
        @remove()
        @trigger 'destroy', @

module.exports = BaseView