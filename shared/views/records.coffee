Q              = require 'q'
BaseView       = require './base.coffee'
RecordView     = require './record.coffee'
{ stfu, gtfo } = require '../util/events.coffee'

class RecordsView extends BaseView
    
    containerSelector : 'tbody'
    
    events : ->
        'click [data-action=sort]'      : 'handleSortingChange'
        'click [data-action=toggleAll]' : 'toggleCheckboxesHandler'
    
    constructor: (options) ->
        super

        unless @_childViewConstructor
            if options.childViewConstructor
                @_childViewConstructor = options.childViewConstructor
            else
                throw new Error 'No child view constructor provided!'
        
        @bind 'selectionChange', (ev) =>
            s = @getViewModel().selection
            if ev.selected then s.push(ev.recordId) else s.splice(s.indexOf(ev.recordId), 1)
            @getViewModel().selection = s
        
        @getViewModel().bind 'refresh',          @refresh,          @
        @getViewModel().bind 'refreshSelection', @refreshSelection, @
    
    handleSortingChange: (ev) ->
        gtfo ev
        
        columnId = @$(ev.currentTarget).data 'column-id'
        
        if @getViewModel().sorting?.by is columnId
            desc = !@getViewModel().sorting.desc
        else
            desc = false
        
        @getViewModel().sorting =
            by   : columnId
            desc : desc
        
        @updateSortingGraphics()
    
    updateSortingGraphics: ->
        $table  = @$('table').first()
        sorting = @getViewModel().sorting
        
        if sorting
            $table.find('thead .sort-asc, thead .sort-desc')
                  .removeClass('sort-asc')
                  .removeClass('sort-desc')
            
            $table.find("thead [data-column-id=#{sorting.by}]")
                  .addClass "sort-#{if sorting.desc then 'desc' else 'asc'}"
    
    getViewModel: -> @collection
    
    addChildToDOM: (view) ->
        @$(@containerSelector).first().append view.el
    
    preRefresh: (ev) ->
        @updateSortingGraphics()
        @updateEmptyMessage()
        
        deferred = Q.defer()
        deferred.resolve()
        deferred.promise
    
    postRefresh: (ev) ->
        if ev and (ev.trigger is 'add' or ev.trigger is 'reset')
            @eachChild (view) ->
                if view instanceof RecordView
                    view.markAdded() if ev.included.pluck('id').indexOf(view.el.dataset.entityId) isnt -1
    
    refresh: (ev) ->
        @preRefresh(ev).then( =>
            toBeRemoved = []
            @_childViews.each (entry) ->
                toBeRemoved.push(entry) if entry.get('view') instanceof RecordView
            
            toBeRemoved.forEach (m) -> m.get('view').destroy()
            
            fragment = document.createDocumentFragment()
            @getViewModel().getSubCollection().each (model) =>
                childView = @createView @_childViewConstructor, @getChildViewOptions model
                childView.render()
                fragment.appendChild childView.el
            
            @addChildToDOM { el : fragment }
            
            @updateEmptyMessage()
            
        ).fin =>
            @postRefresh ev

    refreshSelection: (ev) ->
        @eachChild (view) ->
            if view instanceof RecordView
                if ev.selection.indexOf(view.getViewModel().id) is -1
                    view.deselect yes
                else
                    view.select yes
        
        setTimeout =>
            @$('[data-action=toggleAll]').attr('checked', ev.all)
        , 0
    
    toggleCheckboxesHandler: (ev) ->
        stfu ev
        
        if ev.target.checked
            @getViewModel().selection = @getViewModel().getSubCollection().pluck('id')
        else
            @getViewModel().selection = []

    getChildViewOptions: (model) ->
        { model }
    
    getContainer: ->
        @$el.find 'table tbody'

    updateEmptyMessage: ->
        $emptyMessage = @$('div.empty').hide()
        $notVisibleMessage = @$('div.not-visible').hide()
        
        if @getViewModel().length is 0
            $emptyMessage.show()
        else if @getViewModel().getSubCollection().length is 0
            $notVisibleMessage.show()
    
    addChildView: (view) ->
        super
        @relayEvents view, 'selectionChange'
    
    render: ->
        super
        @getViewModel().trigger 'refresh'

module.exports = RecordsView