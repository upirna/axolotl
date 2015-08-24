BaseModel = require './base_model.coffee'

class Platform extends BaseModel
    
    url: -> ''
    
    defaults:
        currentTimestamp                     : null
        serverVersion                        : null
        maintenanceMode                      : no
        lastAggregationTimestamp             : null
        apiUrl                               : null
        cachedApiUrl                         : null
        insecureApiUrl                       : null
        insecureCachedApiUrl                 : null
        platformDomain                       : null
        globalClientUrl                      : null
        clientApiUrl                         : null
        geoUrl                               : null
        insecureGeoUrl                       : null
        shareFacebookAppId                   : null
        canCreateSampleFolders               : no
        canCreateAccounts                    : no
        canAccessInternalTools               : no
        canPostAnnouncements                 : no
        canDownloadNewsletterSubscribersList : no
        canManageDemoFolderTemplates         : no
        canRequestAccountGhost               : no
        canManageInProductNotifications      : no
        canAnalyze                           : no
        helpUrl                              : null
        gaTrackingId                         : null

module.exports = Platform