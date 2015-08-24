_                              = require 'underscore'
BaseView                       = require '../../../shared/views/base.coffee'
FilteredCollection             = require '../../../shared/collections/filtered.coffee'
CampaignsRecords               = require './campaigns_records.coffee'
StickyHeader                   = require '../../../shared/util/sticky_header.coffee'
CoverflowView                  = require './coverflow.coffee'
{ meh, noop, stfu, gtfo }      = require '../../../shared/util/events.coffee'


class CampaignsView extends BaseView
    
    id        : 'campaigns'
    tagName   : 'section'
    className : 'page'
    
    constructor: (options) ->
        _.extend @, StickyHeader

        @api = options.api

        super
        
        @filteredCollection = new FilteredCollection(
            @model.get('campaigns').models
            {
                model   : @model.get('campaigns').model
                page    : 1
                perPage : 60
                
                filterFn : (campaign, filterValue) ->
                    isArchived = campaign.get 'isArchived'
                    
                    switch filterValue.campaignType
                        when 'active'
                            matchesCampaignType = not isArchived
                        when 'archived'
                            matchesCampaignType = isArchived
                        else
                            matchesCampaignType = true
                    
                    matchesCampaignType
                
                filterValue : @getDefaultFilterValue()
            }
        )

        compareFn = @filteredCollection.getSubCollection().compare
        @filteredCollection.getSubCollection().compare = (first, second) ->
            if @_sortBy is 'traffickingStatus'
                getTraffickingStatusIndex = (traffickingStatus) ->
                    switch traffickingStatus
                        when 'live' then 1
                        when 'idle' then 3
                
                firstIndex  = getTraffickingStatusIndex(first.get('traffickingStatus'))
                secondIndex = getTraffickingStatusIndex(second.get('traffickingStatus'))

                index = @getCompareIndex firstIndex, secondIndex

            else if @_sortBy is 'effectivePlannedUnits'
                index = @getCompareIndex first.get('plannedUnitsByBillingMetric').sessions, second.get('plannedUnitsByBillingMetric').sessions

            else
                defaultCompare = compareFn.bind @

                index = defaultCompare first, second

            index
        
        @filteredCollection.sorting = { by : @model.get('sortBy'), desc : @model.get('desc') }
        
        @filteredCollection.bind 'sortingChange', (v) =>
            @model.set 'sort', { column: v.by }
        
        @recordsView = @createView(
            CampaignsRecords
            {
                collection            : @filteredCollection
                model                 : @model
                account               : @model.get 'account'
                loadingOfSessionsCube : @model.get 'loadingOfSessionsCube'
                loadingOfStatusCube   : @model.get 'loadingOfStatusCube'
                platform              : @model.get 'platform'
                api                   : @api
            }
        )
        
        @model.get('campaigns').bind 'reset', =>
            @filteredCollection.reset campaigns.models

        @showWelcomeScreen = !@model.get('campaigns').length and @model.get('account').get 'canCreateCampaigns'

        @coverflow = @createView(
            CoverflowView
            { collection: @model.get('recentCreatives'), campaigns : @model.get('campaigns') }
        )
        
    events: ->
        'change [data-action=changeCampaignType]' : 'campaignTypeSelectorHandler'

    getTemplateData: ->
        data = super
        data.account           = @model.get('account').toJSON()
        data.showWelcomeScreen = @showWelcomeScreen
        data

    render: ->
        super
        
        unless @showWelcomeScreen
            @coverflow.render()
            $(@coverflow.el).prependTo @el
            
            @coverflow.$el.hide() unless @model.get('recentCreatives').length > 0
            
            @recordsView.render()
            $(@recordsView.el).appendTo @$ '#campaigns-table'
                
            @$el.one 'DOMNodeInserted', (event) =>
                setTimeout( =>
                    @coverflow.goToItem 0
                    , 0
                )

            @enableStickyHeader @$('#campaigns-table-head'), @$('#campaigns-table-body')

    campaignTypeSelectorHandler: (ev) ->
        stfu ev
        @filteredCollection.filterValue.campaignType = ev.target.value.toLowerCase()
        @filteredCollection.trigger 'filterChange'
    
    getDefaultFilterValue: ->
        campaignType : 'active'
    
module.exports = CampaignsView