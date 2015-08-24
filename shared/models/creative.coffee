BaseModel = require '../../shared/models/base_model.coffee'

class Creative extends BaseModel

    urlRoot : 'creatives'

    defaults:
        name                       : ''
        folderId                   : null
        clazz                      : ''
        isPublished                : false
        product                    : ''
        platforms                  : []
        sdks                       : []
        formTablesIds              : []
        locationTablesIds          : []
        customAudienceTablesIds    : []
        version                    : 0
        schemaVersion              : 0
        units                      : {}
        creationTimestamp          : null
        lastModificationTimestamp  : null
        myLastAccess               : null
        isArchived                 : false
        thumbnailUrl               : null
        previewUrl                 : null
        customTagVariables         : []
        workflowStatus             : null
        traffickingStatus          : null
        canBuild                   : false
        canTraffic                 : false
        canModify                  : false
        canAnalyze                 : false
        canCopy                    : false
        sessionsUrl                : null
        creativeLoadsUrl           : null
        creativeViews00Url         : null
        creativeViews501Url        : null
        clickUrl                   : null
        creativeClickEvents        : [{ name : 'firstInteraction' }]
        externalTrackingDefinedOn  : 'PLACEMENT'
        trackCustomEventLabels     : []
        openWebsiteLabels          : []
        getAppLabels               : []
        customEventUrls            : {}
        isVisibleOnMobileDashboard : false
        supportedDeviceTypes       : []
        files                      : []
        clientExtensions           : []
        drawSparklineChart         : yes
        customAttributes           : {}

    toServerJSON : ->
        data = @toJSON()

        unless @isNew()
            # Do not send (partial) units. Dashboard does not really need to change units.
            delete data.units
            return data

        localIdGen = 0
        for unitName, unit of data.units

            data.units[unitName] =
                localId : ++localIdGen
                clazz   : 'CreativeUnit'
                deviceType : unit.deviceType
                master     :
                    localId  : ++localIdGen
                    objects  : []
                    triggers : []
                    title    : 'Master'
                    clazz    : 'Screen'
                screens: [
                    localId  : ++localIdGen
                    objects  : []
                    triggers : []
                    title    : 'Start'
                    clazz    : 'Screen'
                ]
                sizing      : unit.sizing
                orientation : unit.orientation
                layouts     : unit.layouts

            if unit.reveal
                data.units[unitName].revealIntroHeight     = unit.reveal.introHeight
                data.units[unitName].revealCollapsedHeight = unit.reveal.collapsedHeight

        data.files = []
        data.clientExtensions =
            lastScreenTitleId   : 1
            localIdGenerator    : localIdGen
            objectNameGenerator : 0

        data

    _filterTableIds: (obj) ->
        if obj.length?
            for o, idx in obj
                obj[idx] = @_filterTableIds o
        else
            if obj.actionClazz is 'Form' and obj.method is 'submit' and obj.args.submitTarget is 'table'
                obj.args.tableId = null
        obj

    hasEffectiveTraffickingUrls: ->
        @get('externalTrackingDefinedOn') is 'CREATIVE' and
            !!(
                @get('clickUrl') or
                    @get('sessionsUrl') or
                    @get('creativeLoadsUrl') or
                    @get('creativeViews00Url') or
                    @get('creativeViews501Url') or
                    Object.keys(@get('customEventUrls')).length > 0
            )

    hasQrCode: ->
        @get('platforms').pluck('platform').indexOf('DesktopPlatform') is -1

    getFittedThumbnailUrl: (size) ->
        if @get('thumbnailUrl') is null or @defaults.thumbnailUrl is @get('thumbnailUrl')
            @defaults.thumbnailUrl
        else
            for unitName in ['modal', 'banner', 'tablet', 'phone']
                unit = @get('units')[unitName]
                break if unit?

            if unit.layouts.length is 1
                # unit size is fixed
                if unit.layouts[0].unitSize.height > unit.layouts[0].unitSize.width
                    width  = size
                    height = 20 * size
                else
                    height = size
                    width  = 20 * size
            else
                height = size
                width  = 20 * size

            @get('thumbnailUrl') + "?transform=thumbnail&width=#{width}&height=#{height}&mode=fit"

module.exports = Creative
