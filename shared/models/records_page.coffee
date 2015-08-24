BaseModel      = require './base_model.coffee'
UserPreference = require './user_preference.coffee'
_              = require 'underscore'

class RecordsPage extends BaseModel

    constructor: ->
        super
        @set('useLocalStorage', yes) if  typeof Storage isnt 'undefined' and @localStorageKey isnt undefined
        
        if @get( 'useLocalStorage' )
            @storageName = "#{@localStorageKey}Sort"

            if localStorage[@storageName]
                sorting = new UserPreference JSON.parse(localStorage[@storageName])
                _.extend @.attributes, sorting.attributes

    set: (key, val, options) ->
        if key is 'sort'
            if typeof val is 'object'
                column = val.column
                desc = val.desc
            else
                column = val
                desc = null

            if column is @get 'sortBy'
                @set desc  : if desc? then desc else !@get( 'desc' )
            else
                @set
                    sortBy : column
                    desc   : if desc? then desc else no

            sorting = new UserPreference {
                sortBy : @get 'sortBy'
                desc   : @get 'desc'
            }

            localStorage[@storageName] = JSON.stringify sorting if @get 'useLocalStorage'

            @trigger 'sort', sorting.toJSON()

        else super

    compare: ->

module.exports = RecordsPage