BaseModel = require './base_model.coffee'

class Placement extends BaseModel
    
    urlRoot : 'placements'
    
    defaults:
        name                     : null
        folderId                 : null
        supplierId               : null
        traffickingStatus        : 'idle'
        isArchived               : false
        billingMetric            : null
        plannedUnits             : null
        startDate                : null
        effectiveStartDate       : null
        endDate                  : null
        effectiveEndDate         : null
        supplier                 : null
        isMediaOcean             : false
        drawSparklineChart       : no
        creativeSelectionAlgo    : null
        canAnalyze               : false
        canModify                : false
        canTraffic               : false
        canCopy                  : false
        customEventUrls          : {}
        openWebsiteOverrideUrls  : {}
        openWebsitePixelUrls     : {}
        getAppOverrideUrls       : {}
        getAppPixelUrls          : {}
        sessionsUrl              : null
        creativeLoadsUrl         : null
        creativeViews00Url       : null
        creativeViews501Url      : null
        clickUrl                 : null
        customAttributes         : {}
        unitPrice                : null
        exposedCustomEvents      : []
        exposedOpenWebsiteEvents : []
        exposedGetAppEvents      : []
    
    hasEffectiveTraffickingUrls: ->
        !!(
            @get('clickUrl') or
            @get('sessionsUrl') or
            @get('creativeLoadsUrl') or
            @get('creativeViews00Url') or
            @get('creativeViews501Url') or
            Object.keys(@get('customEventUrls')).length > 0 or
            Object.keys(@get('openWebsiteOverrideUrls')).length > 0 or
            Object.keys(@get('openWebsitePixelUrls')).length > 0 or
            Object.keys(@get('getAppOverrideUrls')).length > 0 or
            Object.keys(@get('getAppPixelUrls')).length > 0
        )

module.exports = Placement