$              = require 'jquery'
Backbone       = require 'backbone'
moment         = require 'moment'
BaseCollection = require './base_collection.coffee'

class SubCollection extends BaseCollection
    
    constructor: (models, options) ->
        # re-apply Events mixin
        $.extend @, Backbone.Events
        
        @compare = options.compare  if options and options.compare
        @_sortBy  = options._sortBy if options and options._sortBy
        @_desc    = options._desc   if options and options._desc

        super

    comparator: (first, second) ->
        direction = if @_desc then -1 else 1
        index = @compare first, second

        if index is 0 # fall back comaprison by cid
            firstId  = if first.cid?  then first.cid  else ''
            secondId = if second.cid? then second.cid else ''

            index = @getCompareIndex firstId, secondId

        index * direction

    compare: (first, second) ->
        firstAttr  = first.get @_sortBy
        secondAttr = second.get @_sortBy

        type = if firstAttr? then typeof firstAttr else typeof secondAttr
        return unless ( typeof firstAttr is type or !firstAttr ) and ( typeof secondAttr is type or !secondAttr )

        if type is 'object' and Object.prototype.toString.call( if firstAttr? then firstAttr else secondAttr  ) is '[object Array]'
            type = 'array'

        switch type
            when 'string'
                if @_sortBy.toLowerCase().indexOf('timestamp') isnt -1
                    firstAttr  = '9999-12-31 00:00:00' if !firstAttr
                    secondAttr = '9999-12-31 00:00:00' if !secondAttr
                    
                    firstTimestamp  = +Date.fromApiTimestamp firstAttr
                    secondTimestamp = +Date.fromApiTimestamp secondAttr
                    
                    index = @getCompareIndex firstTimestamp, secondTimestamp
                else if @_sortBy.toLowerCase().indexOf('date') isnt -1
                    firstAttr  = '9999-12-31' if !firstAttr
                    secondAttr = '9999-12-31' if !secondAttr
                    
                    firstDate  = +Date.fromApiDate firstAttr
                    secondDate = +Date.fromApiDate secondAttr
                    
                    index = @getCompareIndex firstDate, secondDate
                else
                    firstString  = if firstAttr  then firstAttr.toLowerCase()  else ''
                    secondString = if secondAttr then secondAttr.toLowerCase() else ''

                    index = @getCompareIndex firstString, secondString

            when 'number', 'boolean'
                index = @getCompareIndex firstAttr, secondAttr
            when 'array'
                index = @getCompareIndex firstAttr.length, secondAttr.length
            else index = 0

        index

    getCompareIndex: (first, second) ->
        if first is second then 0 else if first > second then 1 else -1

module.exports = SubCollection
