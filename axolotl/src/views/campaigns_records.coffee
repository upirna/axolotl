RecordsView    = require '../../../shared/views/records.coffee'
CampaignRecord = require './campaign_record.coffee'

class CampaignsRecordsView extends RecordsView
    
    id : 'campaigns-records'
    
    _childViewConstructor : CampaignRecord

    constructor: (options) ->
        {
            @account
            @currentUser
            @loadingOfSessionsCube
            @loadingOfStatusCube
            @platform
            @api
        } = options
        
        super
    
    refreshSelection: ->
        super
        
        canModifySelectedItems = @getViewModel().selection.filter((id) => not @getViewModel().findWhere({ id: id }).get('canModifyPublicSettings')).length is 0

        archivable = @getViewModel().selection.filter (id) =>
            not @getViewModel().findWhere(id : id).get('isArchived')

        $btn = @$('[data-action=archiveCampaigns]')
        
        if canModifySelectedItems and archivable.length > 0 then $btn.removeAttr('disabled') else $btn.attr('disabled', 'true')
            
    getTemplateData: ->
        account   : @account.toJSON()
        campaigns : @getViewModel().toJSON()
    
    addChildView: (view) ->
        super
        @relayEvents view, ['campaignUnarchived']
    
    getChildViewOptions: (campaign) ->
        model                 : campaign
        page                  : @model
        account               : @account
        currentUser           : @currentUser
        loadingOfSessionsCube : @loadingOfSessionsCube
        loadingOfStatusCube   : @loadingOfStatusCube
        platform              : @platform
        api                   : @api

module.exports = CampaignsRecordsView