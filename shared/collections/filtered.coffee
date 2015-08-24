_              = require 'underscore'
BaseCollection = require '../base_collection.coffee'
SubCollection  = require '../sub_collection.coffee'

class FilteredCollection extends BaseCollection

    constructor: (models, options) ->
        super
        
        @_filterFn                 = options.filterFn    or (-> true)
        @_filterValue              = options.filterValue or null
        @_page                     = options.page        or null
        @_perPage                  = options.perPage     or null
        @_sorting                  = options.sorting     or null
        @_selection                = options.selection   or []
        @_pagelessSubCollectionIds =                        null
        
        Object.defineProperty(
            @
            'filterFn'
            {
                get: -> @_filterFn
                set: (fn) ->
                    @_filterFn = if fn? then fn else (-> true)
                    @trigger 'filterChange'
            }
        )

        Object.defineProperty(
            @
            'filterValue'
            {
                get: -> @_filterValue
                set: (val) ->
                    @_filterValue = val
                    @trigger 'filterValueChange'
            }
        )
        
        Object.defineProperty(
            @
            'sorting'
            {
                get: -> @_sorting
                set: (val) ->
                    @_sorting = val
                    @trigger 'sortingChange', val
            }
        )
        
        Object.defineProperty(
            @
            'selection'
            {
                get: -> JSON.parse(JSON.stringify(@_selection))
                set: (val) ->
                    
                    @_selection = _.uniq val
                    @trigger 'refreshSelection',
                        selection : @_selection
                        all       : @getSubCollection().models.length isnt 0 and @_selection.length is @getSubCollection().models.length
            }
        )
        
        Object.defineProperty(
            @
            'lengthOfList'
            {
                get: -> @_lengthOfList
            }
        )
        
        Object.defineProperty(
            @
            'page'
            {
                get: -> @_page
                set: (val) ->
                    min = 1
                    max = Math.floor(@_length / @_perPage)
                    
                    val = 1   if val < min
                    val = max if val > max
                    
                    @_page = val
                    @_updateFilteredCollection()
            }
        )
        
        Object.defineProperty(
            @
            'perPage'
            {
                get: -> @_perPage
            }
        )

        @bind 'sortingChange',     => @_updateFilteredCollection()
        @bind 'filterChange',      => @_updateFilteredCollection()
        @bind 'filterValueChange', => @_updateFilteredCollection()

        @bind 'add',    @handleElementAdded,    @
        @bind 'change', @handleElementChanged,  @
        @bind 'reset',  @handleCollectionReset, @
        @bind 'remove', @handleElementRemoved,  @

        @filteredCollection = new SubCollection models
        
        @_updateFilteredCollection()

    handleElementAdded: (model) ->
        @_updateFilteredCollection { model : model, trigger : 'add' }

    handleElementRemoved: (model) ->
        @_updateFilteredCollection { model : model, trigger : 'remove' }

    handleElementChanged: (model) ->
        @_updateFilteredCollection { model : model, trigger : 'change' }

    handleCollectionReset: (models) ->
        @_updateFilteredCollection { models : models, trigger : 'reset' }

    _updateFilteredCollection: (extraEventParams = {}) ->
        oldCollection = @filteredCollection.pluck('id')
        
        included = []
        excluded = []
        
        models = @filter (item) =>
            include = @_filterFn item, @_filterValue
            
            if include and oldCollection.indexOf(item.id) is -1
                included.push item
            else if not include and oldCollection.indexOf(item.id) isnt -1
                excluded.push item
            
            include
        
        if @_sorting
            @filteredCollection._sortBy = @_sorting.by
            @filteredCollection._desc   = @_sorting.desc
        
        @filteredCollection.reset models, silent : yes
        
        @filteredCollection.sort()

        @_pagelessSubCollectionIds = @filteredCollection.pluck('id')
        
        isLengthChanged = @filteredCollection.length isnt @_lengthOfList
        @_lengthOfList  = @filteredCollection.length
        
        if @_page > 1 and (@_page - 1) * @_perPage >= @_lengthOfList
            @_page = Math.ceil(@_lengthOfList / @_perPage)

        if @_page and @_perPage
            start = (@_page - 1) * @_perPage
            end   = @_page       * @_perPage
            
            @filteredCollection.reset @filteredCollection.models.slice(start, end), silent : yes
        
        if JSON.stringify(oldCollection) isnt JSON.stringify(@filteredCollection.models.pluck('id')) or isLengthChanged
            @trigger 'refresh', _.extend({ included : included, excluded : excluded }, extraEventParams)
        
        @selection = []

    isModelIncluded: (model) ->
        model in @filteredCollection.models

    getPagelessSubCollectionIds: ->
        @_pagelessSubCollectionIds

    getSubCollection: ->
        @filteredCollection

module.exports = FilteredCollection