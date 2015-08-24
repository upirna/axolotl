BaseModel = require './base_model.coffee'
_         = require 'underscore'

class Account extends BaseModel
    
    urlRoot : 'accounts'

    returnRepresentation: yes
    
    defaults:
        identifier                : null
        name                      : null
        isPayable                 : false
        isActive                  : false
        customDomain              : null
        owner                     : null
        ownerUserId               : null
        locale                    : null
        timezone                  : 'America/New_York'
        logoBlobHash              : null
        logoName                  : null
        brandColor                : '#002961'
        clientUrl                 : null
        clientType                : null
        supportsTrafficking       : false
        enabledBenchmarking       : no

        lastUserActivityTimestamp : null
        
        availableProducts            : []
        allActiveUsers               : []
        allActiveUsersCount          : 0
        loggedInUsers                : []
        userCount                    : 0
        activeUserCount              : 0
        featurePacks                 : []
        canManagePartners            : false
        canManageUsers               : false
        canAccess                    : false
        canCreateCampaigns           : false
        canCreatePartners            : false
        canCreateAccountMemberships  : false
        canCreateDemoFolders         : false
        canModifyOwner               : false
        canAnalyzeSomeFolders        : false
        canModifyInternalSettings    : false
        canModifyPublicSettings      : false
        canGetDetails                : false
        trackingEndpointUrl          : null
        customAttributes             : {}
        customCampaignAttributeKeys  : []
        customCreativeAttributeKeys  : []
        customPlacementAttributeKeys : []
        ignoredSubnets               : []
        
        billingFirstName          : null
        billingLastName           : null
        billingEmail              : null
        billingPhone              : null
        billingCountry            : 'US'
        billingCurrency           : 'USD'
        
        sellerId                  : null
        managerId                 : null

        mediaOceanAccountId       : null
        mediaOceanAgencyId        : null
        
        hasPayeeException     : null
        contractType          : null
        billingRateExceptions : {}
        
    
    getLogoUrl: (rootUrl) ->
        "#{rootUrl}blobs/" + @get('logoBlobHash') + "/" + @get('logoName')
    
    hasOneOfFeaturePacks: (featurePacks) ->
        @get('featurePacks').intersect(featurePacks).length > 0
    
module.exports = Account