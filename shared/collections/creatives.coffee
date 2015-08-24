moment         = require 'moment'
BaseCollection = require '../base_collection.coffee'
Creative       = require '../models/creative.coffee'

class CreativesCollection extends BaseCollection

    model  : Creative
    url    : 'creatives'
    sortBy : 'name'

    @forAccount: (id, clazz = 'Campaign', live = false) ->
        collection      = new @
        collection.url += "?isArchived=0"
        collection.url += "&accountId=#{id}"
        collection.url += "&folderClazz=#{clazz}"
        collection.url += '&live' if live
        collection

    @forAccountAndRecentlyOpened: (accountId) ->
        collection      = new @
        collection.url += "?isArchived=0"
        collection.url += "&recentlyOpened=1"
        collection.url += "&accountId=#{accountId}"

        collection.comparator = (first, second) ->
            a = moment first.get('myLastAccess'),  'YYYY-MM-DD HH:mm:ss'
            b = moment second.get('myLastAccess'), 'YYYY-MM-DD HH:mm:ss'

            if a > b then -1 else 1

        collection

    @forFolder: (id) ->
        collection      = new @
        collection.url += "?folderId=#{id}"
        collection

    @forFolderWithoutArchived: (id) ->
        collection      = new @
        collection.url += "?isArchived=0"
        collection.url += "&folderId=#{id}"
        collection

    @getTemplates: ->
        collection      = new @
        collection.url += "?isArchived=0"
        collection.url += "&isTemplate=1"
        collection

module.exports = CreativesCollection
