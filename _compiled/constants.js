var constants = {
    "products": [
        {
            "id": "STDA",
            "label": "Premium DR Banner",
            "deprecated": false,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["Banner", "ExpandableBanner"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "Frame",
                    "Best",
                    "Button",
                    "TextBox",
                    "Texty",
                    "SelectBox",
                    "CheckBox",
                    "Shapey",
                    "Canvas",
                    "TakePhotoButton"
                ],
                "actions": [
                    "expand",
                    "close",
                    "collapse",
                    "dismiss",
                    "goToScreen",
                    "trackCustomEvent",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "executeJavascript",
                    "random",
                    "trackBestVariantSuccess",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "goToURL",
                    "callPhone",
                    "getApp",
                    "animate",
                    "scale",
                    "submit",
                    "setText",
                    "validate",
                    "saveTheDate",
                    "enableCanvasManipulation",
                    "disableCanvasManipulation",
                    "stitchToCanvas"
                ]
            }
        },
        {
            "id": "RICH",
            "label": "Rich Media",
            "deprecated": false,
            "enabledForNewAccounts": true,
            "compatibility": {
                "formats": ["Banner", "ExpandableBanner", "Interstitial", "Pull", "Slider", "Reveal", "Interscroller", "LandingPage"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "PannableGroup",
                    "Frame",
                    "Best",
                    "Button",
                    "TextBox",
                    "Texty",
                    "SelectBox",
                    "CheckBox",
                    "Video",
                    "Animatey",
                    "RotatingList",
                    "CoverFlow",
                    "View360",
                    "Grid",
                    "Swipey",
                    "SwipeyGroup",
                    "Deck",
                    "Flippy",
                    "LightTable",
                    "TwitterFeed",
                    "Map",
                    "StoreLocator",
                    "StoreLocator2",
                    "Puzzle",
                    "WipeablePicture",
                    "Painty",
                    "Quiz",
                    "Countdown",
                    "Stopwatch",
                    "Gyro",
                    "DraggableGroup",
                    "Basket",
                    "FacebookShareButton",
                    "FacebookLikeBox",
                    "PinterestPinButton",
                    "RetailFeed",
                    "NearestStore",
                    "Instagram",
                    "YoutubeEmbed",
                    "TwitterShareButton",
                    "WhatsApp",
                    "Shapey",
                    "Canvas",
                    "TakePhotoButton"
                ],
                "actions": [
                    "expand",
                    "close",
                    "collapse",
                    "dismiss",
                    "goToScreen",
                    "trackCustomEvent",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "executeJavascript",
                    "random",
                    "best",
                    "trackBestVariantSuccess",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "goToURL",
                    "callPhone",
                    "getApp",
                    "playVideoInPlayer",
                    "playVideoFromURL",
                    "animate",
                    "scale",
                    "facebookURL",
                    "showUser",
                    "tweet",
                    "disableDragging",
                    "enableDragging",
                    "goToItem",
                    "next",
                    "play",
                    "pause",
                    "playAnimation",
                    "previous",
                    "reshuffle",
                    "flip",
                    "rewind",
                    "startStopwatch",
                    "stopCountdown",
                    "startCountdown",
                    "stopStopwatch",
                    "submit",
                    "setText",
                    "validate",
                    "saveTheDate",
                    "triggerByLocalId",
                    "stopAutoAnimate",
                    "resize",
                    "enableCanvasManipulation",
                    "disableCanvasManipulation",
                    "stitchToCanvas",
                    "changeBrush",
                    "undoBrushStroke",
                    "saveImage",
                    "addToAudience",
                    "removeFromAudience",
                    "checkAudience",
                    "checkDateIsBetween",
                    "checkLanguage",
                    "checkLocation",
                    "checkPartOfDay",
                    "checkPartOfWeek",
                    "checkPlacement",
                    "checkPlatformForDesktop",
                    "checkPlatformForPhone",
                    "checkPlatformForTablet",
                    "checkWeather"
                ]
            }
        },
        {
            "id": "SOCI",
            "label": "Social Rich Media",
            "deprecated": true,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["SocialRichMedia"],
                "components": [],
                "actions": []
            }
        },
        {
            "id": "SFTV",
            "label": "Shazam for TV",
            "deprecated": false,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["ShazamForTV", "ShazamForTVExpandable"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "PannableGroup",
                    "Frame",
                    "Best",
                    "Button",
                    "TextBox",
                    "Texty",
                    "SelectBox",
                    "CheckBox",
                    "Video",
                    "Animatey",
                    "RotatingList",
                    "CoverFlow",
                    "View360",
                    "Grid",
                    "Swipey",
                    "SwipeyGroup",
                    "Deck",
                    "Flippy",
                    "LightTable",
                    "TwitterFeed",
                    "Map",
                    "StoreLocator",
                    "StoreLocator2",
                    "Puzzle",
                    "WipeablePicture",
                    "Painty",
                    "Quiz",
                    "Countdown",
                    "Stopwatch",
                    "Gyro",
                    "DraggableGroup",
                    "Basket",
                    "FacebookShareButton",
                    "FacebookLikeBox",
                    "PinterestPinButton",
                    "RetailFeed",
                    "NearestStore",
                    "Instagram",
                    "TwitterShareButton",
                    "WhatsApp",
                    "Shapey",
                    "Canvas",
                    "TakePhotoButton"
                ],
                "actions": [
                    "expand",
                    "close",
                    "collapse",
                    "dismiss",
                    "goToScreen",
                    "trackCustomEvent",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "executeJavascript",
                    "random",
                    "best",
                    "trackBestVariantSuccess",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "goToURL",
                    "callPhone",
                    "getApp",
                    "playVideoInPlayer",
                    "playVideoFromURL",
                    "animate",
                    "scale",
                    "facebookURL",
                    "showUser",
                    "tweet",
                    "disableDragging",
                    "enableDragging",
                    "goToItem",
                    "next",
                    "play",
                    "pause",
                    "playAnimation",
                    "previous",
                    "reshuffle",
                    "flip",
                    "rewind",
                    "startStopwatch",
                    "stopCountdown",
                    "startCountdown",
                    "stopStopwatch",
                    "submit",
                    "setText",
                    "validate",
                    "saveTheDate",
                    "triggerByLocalId",
                    "stopAutoAnimate",
                    "enableCanvasManipulation",
                    "disableCanvasManipulation",
                    "stitchToCanvas",
                    "changeBrush",
                    "undoBrushStroke",
                    "saveImage",
                    "checkAudience",
                    "checkDateIsBetween",
                    "checkLanguage",
                    "checkLocation",
                    "checkPartOfDay",
                    "checkPartOfWeek",
                    "checkPlacement",
                    "checkPlatformForDesktop",
                    "checkPlatformForPhone",
                    "checkPlatformForTablet",
                    "checkWeather"
                ]
            }
        },
        {
            "id": "BIRD",
            "label": "Angry Birds",
            "deprecated": false,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["Lazerbird", "Stardust", "FlockOfBirds"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "PannableGroup",
                    "Frame",
                    "Best",
                    "Button",
                    "TextBox",
                    "Texty",
                    "SelectBox",
                    "CheckBox",
                    "Video",
                    "Animatey",
                    "RotatingList",
                    "CoverFlow",
                    "View360",
                    "Grid",
                    "Swipey",
                    "SwipeyGroup",
                    "Deck",
                    "Flippy",
                    "LightTable",
                    "TwitterFeed",
                    "Map",
                    "StoreLocator",
                    "StoreLocator2",
                    "Puzzle",
                    "WipeablePicture",
                    "Painty",
                    "Quiz",
                    "Countdown",
                    "Stopwatch",
                    "Gyro",
                    "DraggableGroup",
                    "Basket",
                    "FacebookShareButton",
                    "FacebookLikeBox",
                    "PinterestPinButton",
                    "RetailFeed",
                    "NearestStore",
                    "Instagram",
                    "TwitterShareButton",
                    "WhatsApp",
                    "Shapey",
                    "Canvas",
                    "TakePhotoButton"
                ],
                "actions": [
                    "expand",
                    "close",
                    "collapse",
                    "dismiss",
                    "goToScreen",
                    "trackCustomEvent",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "executeJavascript",
                    "random",
                    "best",
                    "trackBestVariantSuccess",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "goToURL",
                    "callPhone",
                    "getApp",
                    "playVideoInPlayer",
                    "playVideoFromURL",
                    "animate",
                    "scale",
                    "facebookURL",
                    "showUser",
                    "tweet",
                    "disableDragging",
                    "enableDragging",
                    "goToItem",
                    "next",
                    "play",
                    "pause",
                    "playAnimation",
                    "previous",
                    "reshuffle",
                    "flip",
                    "rewind",
                    "startStopwatch",
                    "stopCountdown",
                    "startCountdown",
                    "stopStopwatch",
                    "submit",
                    "setText",
                    "validate",
                    "saveTheDate",
                    "triggerByLocalId",
                    "stopAutoAnimate",
                    "enableCanvasManipulation",
                    "disableCanvasManipulation",
                    "stitchToCanvas",
                    "changeBrush",
                    "undoBrushStroke",
                    "saveImage",
                    "checkAudience",
                    "checkDateIsBetween",
                    "checkLanguage",
                    "checkLocation",
                    "checkPartOfDay",
                    "checkPartOfWeek",
                    "checkPlacement",
                    "checkPlatformForDesktop",
                    "checkPlatformForPhone",
                    "checkPlatformForTablet",
                    "checkWeather"
                ]
            }
        },
        {
            "id": "VIDEO",
            "label": "Video",
            "deprecated": false,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["Banner", "ExpandableBanner", "Interstitial"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "PannableGroup",
                    "Frame",
                    "Best",
                    "Button",
                    "TextBox",
                    "Texty",
                    "SelectBox",
                    "CheckBox",
                    "Video",
                    "Animatey",
                    "RotatingList",
                    "CoverFlow",
                    "View360",
                    "Grid",
                    "Swipey",
                    "SwipeyGroup",
                    "Deck",
                    "Flippy",
                    "LightTable",
                    "TwitterFeed",
                    "Map",
                    "StoreLocator",
                    "StoreLocator2",
                    "Puzzle",
                    "WipeablePicture",
                    "Painty",
                    "Quiz",
                    "Countdown",
                    "Stopwatch",
                    "Gyro",
                    "DraggableGroup",
                    "Basket",
                    "FacebookShareButton",
                    "FacebookLikeBox",
                    "PinterestPinButton",
                    "RetailFeed",
                    "NearestStore",
                    "Instagram",
                    "YoutubeEmbed",
                    "TwitterShareButton",
                    "WhatsApp",
                    "Shapey",
                    "Canvas",
                    "TakePhotoButton"
                ],
                "actions": [
                    "expand",
                    "close",
                    "collapse",
                    "dismiss",
                    "goToScreen",
                    "trackCustomEvent",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "executeJavascript",
                    "random",
                    "best",
                    "trackBestVariantSuccess",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "goToURL",
                    "callPhone",
                    "getApp",
                    "playVideoInPlayer",
                    "playVideoFromURL",
                    "animate",
                    "scale",
                    "facebookURL",
                    "showUser",
                    "tweet",
                    "disableDragging",
                    "enableDragging",
                    "goToItem",
                    "next",
                    "play",
                    "pause",
                    "playAnimation",
                    "previous",
                    "reshuffle",
                    "flip",
                    "rewind",
                    "startStopwatch",
                    "stopCountdown",
                    "startCountdown",
                    "stopStopwatch",
                    "submit",
                    "setText",
                    "validate",
                    "saveTheDate",
                    "triggerByLocalId",
                    "stopAutoAnimate",
                    "enableCanvasManipulation",
                    "disableCanvasManipulation",
                    "stitchToCanvas",
                    "saveImage",
                    "addToAudience",
                    "removeFromAudience",
                    "checkAudience",
                    "checkDateIsBetween",
                    "checkLanguage",
                    "checkLocation",
                    "checkPartOfDay",
                    "checkPartOfWeek",
                    "checkPlacement",
                    "checkPlatformForDesktop",
                    "checkPlatformForPhone",
                    "checkPlatformForTablet",
                    "checkWeather"
                ]
            }
        },
        {
            "id": "ENGLISH",
            "label": "HTML5 Banner",
            "deprecated": false,
            "enabledForNewAccounts": false,
            "compatibility": {
                "formats": ["Banner"],
                "components": [
                    "Hotspot",
                    "ObjectGroup",
                    "Picture",
                    "Button",
                    "TextBox",
                    "Texty",
                    "Shapey"
                ],
                "actions": [
                    "dismiss",
                    "goToScreen",
                    "checkOrientation",
                    "checkPlatform",
                    "alert",
                    "reset",
                    "loop",
                    "once",
                    "sleep",
                    "displayImage",
                    "show",
                    "hide",
                    "callPhone",
                    "goToURL",
                    "getApp",
                    "animate",
                    "scale",
                    "setText"
                ]
            }
        }
    ],

    "formats": [
        {
            "id": "Banner",
            "label": "Banner",
            "deviceTypeCombinations": [
                {"label": "Phone",   "units": {"banner": "Phone" }},
                {"label": "Tablet",  "units": {"banner": "Tablet"}},
                {"label": "Desktop", "units": {"banner": "Desktop"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "DesktopPlatform", "WindowsPhone"],
                "sdks": ["MobileWeb", "SafeFrame", "MRAID", "AdMarvel", "Amazon", "NexageORMMA", "DFP", "AdMob", "Pandora", "MillennialMedia"]
            },
            "units": [
                { "id":"banner", "label":"Banner", "expandable": false, "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": true }
            ]
        },
        {
            "id": "ExpandableBanner",
            "label": "Standard Expandable Banner",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}},
                {"label": "Tablet", "units": {"banner": "Tablet", "modal": "Tablet"}},
                {"label": "Desktop", "units": {"banner": "Desktop", "modal": "Desktop"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "DesktopPlatform", "WindowsPhone"],
                "sdks": ["MobileWeb", "SafeFrame", "MRAID", "AdMarvel", "Amazon", "NexageORMMA", "DFP", "AdMob", "Pandora", "MillennialMedia"]
            },
            "units": [
                { "id":"banner", "label":"Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label":"Expanded", "expandable": false, "closeable": true,  "collapsible": true,  "positionable": true,  "loadingScreen": true,  "supportsOrientation": true,  "canOverflow": true,  "showOverflow": false, "supportsResponsive": true,  "paidMedia": false }
            ]
        },
        {
            "id": "Interstitial",
            "label": "Interstitial",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone" }},
                {"label": "Tablet", "units": {"banner": "Tablet"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "WindowsPhone"],
                "sdks": ["MobileWeb", "SafeFrame", "MRAID", "AdMarvel", "Amazon", "NexageORMMA", "DFP", "AdMob", "Pandora", "MillennialMedia"]
            },
            "units": [
                { "id":"banner", "label":"Main", "expandable": false, "closeable": true, "collapsible": false, "positionable": true, "loadingScreen": true, "supportsOrientation": true, "canOverflow": true, "showOverflow": false, "supportsResponsive": true, "paidMedia": true }
            ]
        },
        {
            "id": "SocialRichMedia",
            "label": "Social Rich Media",
            "type": "standard",
            "deviceTypeCombinations": [
                {"label": "Universal",  "units": {"phone": "Phone", "tablet": "Tablet" }}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["Twitter", "Facebook"]
            },
            "units": [
                { "id": "phone",  "label": "Phone",  "expandable": false, "closeable": false, "collapsible": false, "positionable": true, "loadingScreen": true, "supportsOrientation": true, "canOverflow": true, "showOverflow": true, "supportsResponsive": true, "paidMedia": false },
                { "id": "tablet", "label": "Tablet", "expandable": false, "closeable": false, "collapsible": false, "positionable": true, "loadingScreen": true, "supportsOrientation": true, "canOverflow": true, "showOverflow": true, "supportsResponsive": true, "paidMedia": false }
            ]
        },
        {
            "id": "Pull",
            "label": "Pull Banner",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}},
                {"label": "Tablet", "units": {"banner": "Tablet", "modal": "Tablet"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["MobileWeb"]
            },
            "units": [
                { "id":"banner", "label":"Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": true, "loadingScreen": false, "supportsOrientation": false, "canOverflow": true, "showOverflow": true, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label":"Expanded", "expandable": false, "closeable": true,  "collapsible": true, "positionable": true, "loadingScreen": false, "supportsOrientation": true,  "canOverflow": true, "showOverflow": true, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "Slider",
            "label": "Slider Banner",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}},
                {"label": "Tablet", "units": {"banner": "Tablet", "modal": "Tablet"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["MobileWeb"]
            },
            "units": [
                { "id":"banner", "label":"Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": true, "loadingScreen": false, "supportsOrientation": false, "canOverflow": true, "showOverflow": true, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label":"Expanded", "expandable": false, "closeable": true,  "collapsible": true, "positionable": true, "loadingScreen": false, "supportsOrientation": true,  "canOverflow": true, "showOverflow": true, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "ShazamForTV",
            "label": "Shazam for TV",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["AdMarvel"]
            },
            "units": [
                { "id":"banner", "label":"Banner", "expandable": false, "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "ShazamForTVExpandable",
            "label": "Shazam for TV Expandable",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["AdMarvel"]
            },
            "units": [
                { "id":"banner", "label":"Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": false },
                { "id":"modal",  "label":"Expanded", "expandable": false, "closeable": true,  "collapsible": true,  "positionable": true,  "loadingScreen": true,  "supportsOrientation": true,  "canOverflow": true,  "showOverflow": false, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "Lazerbird",
            "label": "Lazerbird",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["NexageORMMA"]
            },
            "units": [
                { "id":"banner", "label": "Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label": "Expanded", "expandable": false, "closeable": true,  "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "Stardust",
            "label": "Stardust",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["NexageORMMA"]
            },
            "units": [
                { "id":"banner", "label": "Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label": "Expanded", "expandable": false, "closeable": true,  "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "FlockOfBirds",
            "label": "Flock of Birds",
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"banner": "Phone",  "modal": "Phone"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android"],
                "sdks": ["NexageORMMA"]
            },
            "units": [
                { "id":"banner", "label": "Banner",   "expandable": true,  "closeable": false, "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": true },
                { "id":"modal",  "label": "Expanded", "expandable": false, "closeable": true,  "collapsible": false, "positionable": false, "loadingScreen": false, "supportsOrientation": false, "canOverflow": false, "showOverflow": false, "supportsResponsive": false, "paidMedia": false }
            ]
        },
        {
            "id": "Reveal",
            "label": "Reveal",
            "deviceTypeCombinations": [
                { "label": "Phone", "units": {"banner": "Phone"} },
                { "label": "Tablet", "units": {"banner": "Tablet"} },
                { "label": "Desktop", "units": {"banner": "Desktop"} }
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "DesktopPlatform", "WindowsPhone"],
                "sdks": ["MobileWeb"]
            },
            "units": [
                { "id": "banner", "label": "Main", "expandable": false, "closeable": true, "collapsible": false, "positionable": true, "loadingScreen": true, "supportsOrientation": false, "canOverflow": true, "showOverflow": true, "supportsResponsive": false, "paidMedia": true }
            ]
        },
        {
            "id": "LandingPage",
            "label": "Landing Page",
            "featurePacks": ["beta", "landingPage"],
            "deviceTypeCombinations": [
                {"label": "Phone",  "units": {"modal": "Phone"}},
                {"label": "Tablet", "units": {"modal": "Tablet"}},
                {"label": "Desktop", "units": {"modal": "Desktop"}}
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "DesktopPlatform", "WindowsPhone"],
                "sdks": ["MobileWeb"]
            },
            "units": [
                { "id":"modal",  "label":"Landing Page", "expandable": false, "closeable": false,  "collapsible": false,  "positionable": true,  "loadingScreen": true,  "supportsOrientation": true, "canOverflow": true,  "showOverflow": false,  "supportsResponsive": false,  "paidMedia": true }
            ]
        },
        {
            "id": "Interscroller",
            "label": "Interscroller",
            "deviceTypeCombinations": [
                { "label": "Phone", "units": {"banner": "Phone"} },
                { "label": "Tablet", "units": {"banner": "Tablet"} },
                { "label": "Desktop", "units": {"banner": "Desktop"} }
            ],
            "compatibility": {
                "platforms": ["IOS", "Android", "WindowsPhone"],
                "sdks": ["MobileWeb"]
            },
            "units": [
                { "id": "banner", "label": "Main", "expandable": false, "closeable": false, "collapsible": false, "positionable": true, "loadingScreen": false, "supportsOrientation": true, "canOverflow": true, "showOverflow": true, "supportsResponsive": true, "paidMedia": true }
            ]
        }
    ],

    "deviceTypes": [
        {
            "id"     : "Phone",
            "label"  : "Phone",
            "sizes"  :
            {
                "extra-large" :
                {
                    "screen"          : { "w" : 360, "h" : 640 },
                    "viewport"        : {
                        "portrait"    : { "w" : 360, "h" : 560 },
                        "landscape"   : { "w" : 640, "h" : 280 }
                    },
                    "representatives" : ["Samsung Galaxy S III", "Samsung Nexus Galaxy", "HTC One X", "Sony Xperia S", "Motorola Droid Razr", "HTC One S", "HTC Sensation"]
                },
                "large" :
                {
                    "screen"          : { "w" : 320, "h" : 569 },
                    "viewport"        : {
                        "portrait"    : { "w" : 320, "h" : 489 },
                        "landscape"   : { "w" : 569, "h" : 240 }
                    },
                    "representatives" : ["Motorola Droid 2"]
                },
                "medium" :
                {
                    "screen"          : { "w" : 320, "h" : 533 },
                    "viewport"        : {
                        "portrait"    : { "w" : 320, "h" : 453 },
                        "landscape"   : { "w" : 533, "h" : 240 }
                    },
                    "representatives" : ["iPhone 5", "Samsung Galaxy S", "Samsung Galaxy S II", "HTC One V"]
                },
                "small" :
                {
                    "screen"          : { "w" : 320, "h" : 480 },
                    "viewport"        : {
                        "portrait"    : { "w" : 320, "h" : 416 },
                        "landscape"   : { "w" : 480, "h" : 240 }
                    },
                    "representatives" : ["iPhone 4", "iPhone 2G - 3GS"]
                }
            }
        },
        {
            "id"    : "Tablet",
            "label" : "Tablet",
            "sizes" : {
                "large"   : {
                    "screen"          : { "h" : 1280, "w" : 800  },
                    "viewport"        : {
                        "portrait"    : { "h" : 1128, "w" : 800  },
                        "landscape"   : { "h" : 648,  "w" : 1280 }
                    },
                    "representatives" : ["Motorola Xoom"]
                },
                "medium"  : {
                    "screen"          : { "h" : 1024, "w" : 768  },
                    "viewport"        : {
                        "portrait"    : { "h" : 900,  "w" : 768  },
                        "landscape"   : { "h" : 644,  "w" : 1024 }
                    },
                    "representatives" : ["iPad", "iPad mini"]
                },
                "small"   : {
                    "screen"          : { "h" : 1024, "w" : 600  },
                    "viewport"        : {
                        "portrait"    : { "h" : 870,  "w" : 600  },
                        "landscape"   : { "h" : 448,  "w" : 1024 }
                    },
                    "representatives" : ["Nexus 7", "Samsung Galaxy Tab 2"]
                }
            }
        },
        {
            "id": "Desktop",
            "label": "Desktop",
            "sizes" : {
                "medium"  : {
                    "screen"          : { "h" : 1024, "w" : 1230  },
                    "viewport"        : {
                        "portrait"    : { "h" : 1024, "w" : 1230  }
                    }
                }
            }
        },
        {
            "id": "UnknownDeviceType",
            "label": "Unknown"
        }
    ],

    "platforms": [
        {"id": "IOS",              "label": "iOS",           "default": true,  "supportedVersions": ["7"], "deprecatedVersions": ["6"],   "defaultVersion": "7", "supportsOrientation": true,  "supportsResponsive": true,  "supportsUnitPositioning": true,  "canOverflow": true },
        {"id": "Android",          "label": "Android",       "default": true,  "supportedVersions": ["4"], "deprecatedVersions": ["2.3"], "defaultVersion": "4", "supportsOrientation": true,  "supportsResponsive": true,  "supportsUnitPositioning": true,  "canOverflow": true },
        {"id": "WindowsPhone",     "label": "Windows Phone", "default": false, "supportedVersions": ["8"], "deprecatedVersions": [],      "defaultVersion": "8", "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": true,  "canOverflow": true },
        {"id": "DesktopPlatform",  "label": "Desktop",       "default": false, "supportedVersions": [],    "deprecatedVersions": [],                             "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": false, "canOverflow": true },
        {"id": "WebOS",            "label": "WebOS",         "default": false, "supportedVersions": [],    "deprecatedVersions": [],                             "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": false, "canOverflow": false },
        {"id": "BlackBerry",       "label": "BlackBerry",    "default": false, "supportedVersions": [],    "deprecatedVersions": [],                             "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": false, "canOverflow": false },
        {"id": "WAPBrowser",       "label": "WAP Browser",   "default": false, "supportedVersions": [],    "deprecatedVersions": [],                             "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": false, "canOverflow": false },
        {"id": "UnknownPlatform",  "label": "Unknown",       "default": false, "supportedVersions": [],    "deprecatedVersions": [],                             "supportsOrientation": false, "supportsResponsive": false, "supportsUnitPositioning": false, "canOverflow": false }
    ],

    "externalAdServers": [
        {"id": "Custom",          "label": "Custom"},
        {"id": "4INFO",           "label": "4INFO"},
        {"id": "Adconion",        "label": "Adconion"},
        {"id": "AppNexus",        "label": "AppNexus"},
        {"id": "AdQuota",         "label": "AdQuota"},
        {"id": "AdMarvel",        "label": "AdMarvel"},
        {"id": "AdTech",          "label": "AdTech"},
        {"id": "AdTheorent",      "label": "AdTheorent"},
        {"id": "Amobee",          "label": "Amobee"},
        {"id": "BlisMedia",       "label": "Blis Media"},
        {"id": "Burstly",         "label": "Burstly"},
        {"id": "AdFonic",         "label": "BYYD"},
        {"id": "DataXu",          "label": "DataXu"},
        {"id": "DCM",             "label": "DoubleClick Campaign Manager"},
        {"id": "DFP",             "label": "DFP Legacy (ex. \"DFP\")"},
        {"id": "DFPAPI",          "label": "DFP Mobile Ad Network and Rich Media API"},
        {"id": "DFPPremium",      "label": "DoubleClick for Publishers Premium"},
        {"id": "EveryScreen",     "label": "EveryScreen Media"},
        {"id": "Freewheel",       "label": "Freewheel"},
        {"id": "InMobi",          "label": "InMobi"},
        {"id": "JumptapCPC",      "label": "Jumptap CPC"},
        {"id": "Komli",           "label": "Komli"},
        {"id": "MADS",            "label": "MADS"},
        {"id": "MillennialMedia", "label": "Millennial Media"},
        {"id": "mOcean",          "label": "mOcean"},
        {"id": "MobFox",          "label": "MobFox"},
        {"id": "MoPub",           "label": "MoPub"},
        {"id": "Nexage",          "label": "Nexage"},
        {"id": "OAS",             "label": "Open AdStream"},
        {"id": "Permodo",         "label": "Permodo"},
        {"id": "Pinger",          "label": "Pinger"},
        {"id": "PPMN",            "label": "PPMN"},
        {"id": "Pubmatic",        "label": "Pubmatic"},
        {"id": "RocketFuel",      "label": "Rocket Fuel"},
        {"id": "Rubicon",         "label": "Rubicon"},
        {"id": "MediaMind",       "label": "Sizmek"},
        {"id": "StrikeAd",        "label": "StrikeAd"},
        {"id": "SmartAdserver",   "label": "SmartAdserver"},
        {"id": "TapJoy",          "label": "TapJoy"},
        {"id": "Undertone",       "label": "Undertone"},
        {"id": "Mobclix",         "label": "Velti"},
        {"id": "YahooUS",         "label": "Yahoo"}
    ],

    "sdks": [
        {"id": "MobileWeb",       "label": "Web Browser",      "default": true },
        {"id": "SafeFrame",       "label": "SafeFrame",        "default": false},
        {"id": "MRAID",           "label": "MRAID",            "default": true },
        {"id": "ORMMA",           "label": "ORMMA pre 1.0",    "default": false},

        {"id": "Twitter",         "label": "Twitter",          "default": false},
        {"id": "Facebook",        "label": "Facebook",         "default": false},

        {"id": "Amazon",          "label": "Amazon",           "default": false},
        {"id": "AOL",             "label": "AOL",              "default": false},
        {"id": "AdMarvel",        "label": "AdMarvel",         "default": false},
        {"id": "AdMob",           "label": "AdMob",            "default": false},
        {"id": "Mobclix",         "label": "Mobclix",          "default": false},
        {"id": "DFP",             "label": "DFP",              "default": false},
        {"id": "NexageORMMA",     "label": "Nexage ORMMA",     "default": false},
        {"id": "Jumptap",         "label": "Jumptap",          "default": false},

        {"id": "Pandora",         "label": "Pandora",          "default": false},
        {"id": "Shazam",          "label": "Shazam",           "default": false},
        {"id": "MillennialMedia", "label": "Millennial Media", "default": false}
    ],

    "components": [
        {"id": "Animatey"},
        {"id": "Basket"},
        {"id": "Button"},
        {"id": "Canvas"},
        {"id": "CheckBox"},
        {"id": "Countdown"},
        {"id": "CoverFlow"},
        {"id": "DraggableGroup"},
        {"id": "FacebookLikeBox"},
        {"id": "FacebookLikeButton"},
        {"id": "FacebookShareButton"},
        {"id": "Frame"},
        {"id": "Best", "featurePacks": ["beta", "dcoBeta"]},
        {"id": "Grid"},
        {"id": "Gyro"},
        {"id": "Hotspot"},
        {"id": "ObjectGroup"},
        {"id": "Instagram"},
        {"id": "LightTable"},
        {"id": "Map"},
        {"id": "NearestStore"},
        {"id": "Painty"},
        {"id": "Quiz", "new": "2015-05-07"},
        {"id": "PannableGroup"},
        {"id": "Picture"},
        {"id": "PinterestPinButton"},
        {"id": "Puzzle"},
        {"id": "RetailFeed"},
        {"id": "RotatingList"},
        {"id": "SelectBox"},
        {"id": "Shapey"},
        {"id": "Stopwatch"},
        {"id": "StoreLocator"},
        {"id": "StoreLocator2", "new": "2015-05-07"},
        {"id": "Swipey"},
        {"id": "SwipeyGroup"},
        {"id": "Deck", "new": "2015-05-07"},
        {"id": "Flippy"},
        {"id": "TakePhotoButton"},
        {"id": "TextBox"},
        {"id": "Texty"},
        {"id": "TwitterFeed"},
        {"id": "TwitterShareButton"},
        {"id": "Video"},
        {"id": "View360"},
        {"id": "WhatsApp"},
        {"id": "WipeablePicture"},
        {"id": "YoutubeEmbed"}
    ],

    "actions": [
        {"id": "alert"},
        {"id": "animate"},
        {"id": "best", "featurePacks": ["beta", "dcoBeta"]},
        {"id": "trackBestVariantSuccess", "featurePacks": ["beta", "dcoBeta"]},
        {"id": "callPhone"},
        {"id": "callURL"},
        {"id": "close"},
        {"id": "collapse"},
        {"id": "dismiss"},
        {"id": "disableCanvasManipulation"},
        {"id": "disableDragging"},
        {"id": "displayImage"},
        {"id": "enableCanvasManipulation"},
        {"id": "enableDragging"},
        {"id": "executeJavascript"},
        {"id": "expand"},
        {"id": "facebookURL"},
        {"id": "getApp"},
        {"id": "goToAndroidMarket"},
        {"id": "goToAppStore"},
        {"id": "goToItem"},
        {"id": "goToScreen"},
        {"id": "goToURL"},
        {"id": "hide"},
        {"id": "loop"},
        {"id": "once"},
        {"id": "next"},
        {"id": "play"},
        {"id": "pause"},
        {"id": "playAnimation"},
        {"id": "playVideoInPlayer"},
        {"id": "playVideoFromURL"},
        {"id": "previous"},
        {"id": "random"},
        {"id": "reset"},
        {"id": "reshuffle"},
        {"id": "flip"},
        {"id": "rewind"},
        {"id": "rsvp"},
        {"id": "scale"},
        {"id": "show"},
        {"id": "showUser"},
        {"id": "sleep"},
        {"id": "startStopwatch"},
        {"id": "stitchToCanvas"},
        {"id": "stopAutoAnimate"},
        {"id": "stopCountdown"},
        {"id": "startCountdown"},
        {"id": "stopStopwatch"},
        {"id": "submit"},
        {"id": "saveTheDate"},
        {"id": "trackCustomEvent"},
        {"id": "checkOrientation"},
        {"id": "checkPlatform"},
        {"id": "tweet"},
        {"id": "setText"},
        {"id": "validate"},
        {"id": "triggerByLocalId"},
        {"id": "resize"},
        {"id": "changeBrush"},
        {"id": "undoBrushStroke"},
        {"id": "saveImage"},
        {"id": "addToAudience", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "removeFromAudience", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkAudience", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkDateIsBetween", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkLanguage", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkLocation", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPartOfDay", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPartOfWeek", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPlacement", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPlatformForDesktop", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPlatformForPhone", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkPlatformForTablet", "featurePacks": ["beta", "relevancyBeta"]},
        {"id": "checkWeather", "featurePacks": ["beta", "relevancyBeta"]}
    ],

    "events": [
        { "id": "ended" },
        { "id": "appear" },
        { "id": "beforeAppear" },
        { "id": "enterView" },
        { "id": "completed" },
        { "id": "custom" },
        { "id": "drop" },
        { "id": "firstAppear" },
        { "id": "leaveView" },
        { "id": "itemBlur" },
        { "id": "itemFocus" },
        { "id": "itemFocusLegacy" },
        { "id": "itemSwipe" },
        { "id": "itemDrag" },
        { "id": "mouseOver" },
        { "id": "mouseOut" },
        { "id": "orientationChange" },
        { "id": "photoTaken" },
        { "id": "wipeSurface" },
        { "id": "scroll" },
        { "id": "scrollTo" },
        { "id": "select" },
        { "id": "shake" },
        { "id": "swipe" },
        { "id": "tap" },
        { "id": "tapped" },
        { "id": "touchend" },
        { "id": "touch" },
        { "id": "touchstart" },
        { "id": "quizQuestionShown", "new": "2015-05-07" },
        { "id": "quizComplete", "new": "2015-05-07" },
        { "id": "videoPause" },
        { "id": "videoComplete" },
        { "id": "videoCuepoint" },
        { "id": "drag", "new": "2015-05-07" },
        { "id": "swipeOffscreen", "new": "2015-05-07" },
        { "id": "unitResize", "new": "2015-04-21"}
    ],

    "dimensions": [
        {
            "id": "utcDate",
            "groups": ["Time (UTC)"],
            "label": "Date (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The date on which the impression was registered.",
            "additionalDescription": "Date is presented in the 'yyyy-mm-dd' format.",
            "deprecated": false
        },
        {
            "id": "utcYear",
            "groups": ["Time (UTC)"],
            "label": "Year (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The year in which the impression was registered.",
            "additionalDescription": "Year is presented in the 'yyyy' format. ",
            "deprecated": false
        },
        {
            "id": "utcMonth",
            "groups": ["Time (UTC)"],
            "label": "Month (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The month in which the impression was registered.",
            "additionalDescription": "Month is presented in the 'mm' format.",
            "deprecated": false
        },
        {
            "id": "utcDay",
            "groups": ["Time (UTC)"],
            "label": "Day (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The day on which the impression was registered.",
            "additionalDescription": "Day is presented in the 'dd' format.",
            "deprecated": false
        },
        {
            "id": "utcHour",
            "groups": ["Time (UTC)"],
            "label": "Hour of day (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The hour in which the impression was registered.",
            "additionalDescription": "Hour is presented in the 'hh' format.",
            "deprecated": false
        },
        {
            "id": "utcHourTimestamp",
            "groups": ["Time (UTC)"],
            "label": "Hour timestamp (UTC)",
            "internal": false,
            "computed": false,
            "shortDescription": "The timestamp of the beginning of the hour when the impression was registered.",
            "additionalDescription": "Timestamp is presented in the 'yyyy-MM-dd hh:mm:ss' format.",
            "deprecated": false
        },
        {
            "id": "accountDate",
            "groups": ["Time (account)"],
            "label": "Date (account)",
            "internal": false,
            "computed": false,
            "shortDescription": "The date on which the impression was registered, in the account time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountYear",
            "groups": ["Time (account)"],
            "label": "Year (account)",
            "internal": false,
            "computed": false,
            "shortDescription": "The year in which the impression was registered, in the account's time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountMonth",
            "groups": ["Time (account)"],
            "label": "Month (account)",
            "internal": false,
            "computed": false,
            "shortDescription": "The month in which the impression was registered, in the account's time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountDay",
            "groups": ["Time (account)"],
            "label": "Day (account)",
            "internal": false,
            "computed": false,
            "shortDescription": "The day on which the impression was registered, in the account's time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountHour",
            "groups": ["Time (account)"],
            "label": "Hour of day (account)",
            "internal": true,
            "computed": false,
            "shortDescription": "The hour in which the impression was registered, in the account's time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountHourTimestamp",
            "groups": ["Time (account)"],
            "label": "Hour timestamp (account)",
            "internal": true,
            "computed": false,
            "shortDescription": "The timestamp of the beginning of the hour when the impression was registered, in the accounts time zone.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountId",
            "groups": ["Account"],
            "label": "Account ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the account.",
            "additionalDescription": "The ID is presented as an 8 character alpha-numeric value.",
            "deprecated": false
        },
        {
            "id": "accountName",
            "groups": ["Account"],
            "label": "Account name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the account.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountIdentifier",
            "groups": ["Account"],
            "label": "Account identifier",
            "internal": false,
            "computed": false,
            "shortDescription": "The subdomain of the account.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "clientType",
            "groups": ["Account"],
            "label": "Client type",
            "internal": false,
            "computed": false,
            "shortDescription": "The type of client which owns the account.",
            "additionalDescription": "For example: 'Agency Group', 'Media Agency', 'Creative Agency', ...",
            "deprecated": false
        },
        {
            "id": "billingCountry",
            "groups": ["Account"],
            "label": "Billing country",
            "internal": false,
            "computed": false,
            "shortDescription": "The country where the account is billed.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "billingRegion",
            "groups": ["Account"],
            "label": "Billing region",
            "internal": false,
            "computed": false,
            "shortDescription": "The region where the account is billed, based on the selected country.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "billingCurrency",
            "groups": ["Account"],
            "label": "Billing currency",
            "internal": true,
            "computed": false,
            "shortDescription": "Currency used for invoicing/billing purposes.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "contractType",
            "groups": ["Account"],
            "label": "Contract type",
            "internal": true,
            "computed": false,
            "shortDescription": "Contract style (MSA or IO).",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "payeeException",
            "groups": ["Account"],
            "label": "Payee exception",
            "internal": true,
            "computed": false,
            "shortDescription": "Indicates that account is not a payee for some of its invoices.",
            "additionalDescription": "Possible values are 'Yes' and 'No'.",
            "deprecated": false
        },
        {
            "id": "sellerId",
            "groups": ["Account"],
            "label": "Seller ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The ID of the seller assigned to the account.",
            "additionalDescription": "The ID is presented as an 8 character alpha-numeric value.",
            "deprecated": false
        },
        {
            "id": "sellerFullName",
            "groups": ["Account"],
            "label": "Seller name",
            "internal": true,
            "computed": false,
            "shortDescription": "The full name of the seller assigned to the account.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "accountManagerId",
            "groups": ["Account"],
            "label": "Account manager ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The ID of the account manager assigned to the account.",
            "additionalDescription": "The ID is presented as an 8 character alpha-numeric value.",
            "deprecated": false
        },
        {
            "id": "accountManagerFullName",
            "groups": ["Account"],
            "label": "Account manager name",
            "internal": true,
            "computed": false,
            "shortDescription": "The full name of the account manager assigned to the account.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "managedAccount",
            "groups": ["Account"],
            "label": "Managed account",
            "internal": true,
            "computed": false,
            "shortDescription": "Indicates that account is managed by Celtra.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "campaignId",
            "groups": ["Campaign"],
            "label": "Campaign ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the campaign.",
            "additionalDescription": "The ID is presented as an 8 character alpha-numeric value.",
            "deprecated": false
        },
        {
            "id": "campaignName",
            "groups": ["Campaign"],
            "label": "Campaign name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the campaign.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "industry",
            "groups": ["Campaign"],
            "label": "Industry",
            "internal": false,
            "computed": false,
            "shortDescription": "The IAB industry of the campaign.",
            "additionalDescription": "For example: 'Arts, Design & Fashion', 'Automotive', 'Education', ...",
            "deprecated": false
        },
        {
            "id": "category",
            "groups": ["Campaign"],
            "label": "Category",
            "internal": false,
            "computed": false,
            "shortDescription": "The IAB industry of the campaign.",
            "additionalDescription": "For example: 'Arts, Design & Fashion', 'Automotive', 'Education', ...",
            "deprecated": true
        },
        {
            "id": "goal",
            "groups": ["Campaign"],
            "label": "Goal",
            "internal": false,
            "computed": false,
            "shortDescription": "The goal of the campaign.",
            "additionalDescription": "For example: 'Acquisition', 'Awareness', 'Branding', ...",
            "deprecated": false
        },
        {
            "id": "campaignStartDate",
            "groups": ["Campaign"],
            "label": "Campaign start date",
            "internal": false,
            "computed": false,
            "shortDescription": "The start date of the scheduled campaign flight.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "campaignEndDate",
            "groups": ["Campaign"],
            "label": "Campaign end date",
            "internal": false,
            "computed": false,
            "shortDescription": "The end date of the scheduled campaign flight.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "campaignManagerId",
            "groups": ["Campaign"],
            "label": "Campaign manager ID",
            "internal": false,
            "computed": false,
            "shortDescription": "Manager of campaign.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "campaignManagerFullName",
            "groups": ["Campaign"],
            "label": "Campaign manager name",
            "internal": false,
            "computed": false,
            "shortDescription": "The full name of the manager assigned to the campaign.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "managedCampaign",
            "groups": ["Campaign"],
            "label": "Managed campaign",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates that campaign is managed by Celtra.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeId",
            "groups": ["Creative"],
            "label": "Creative ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the creative.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeName",
            "groups": ["Creative"],
            "label": "Creative name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the creative.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "product",
            "groups": ["Creative"],
            "label": "Product",
            "internal": false,
            "computed": false,
            "shortDescription": "The Product on which the creative is built.",
            "additionalDescription": "For example: 'Premium DR Banner', 'Rich Media'. Refer to products for a full list of possible values.",
            "deprecated": false
        },
        {
            "id": "billingRate",
            "groups": ["Creative"],
            "label": "Billing rate",
            "internal": true,
            "computed": false,
            "shortDescription": "Non-discounted billing rate.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "billingRateException",
            "groups": ["Creative"],
            "label": "Billing rate exception",
            "internal": true,
            "computed": false,
            "shortDescription": "Indicates that account has non-standard rates for some campaigns.",
            "additionalDescription": "Possible values are 'Yes' and 'No'.",
            "deprecated": false
        },
        {
            "id": "format",
            "groups": ["Creative"],
            "label": "Format",
            "internal": false,
            "computed": false,
            "shortDescription": "The format of the creative.",
            "additionalDescription": "For example: 'Banner', 'Interstitial'. Refer to formats for a full list of possible values.",
            "deprecated": false
        },
        {
            "id": "deviceType",
            "groups": ["Creative"],
            "label": "Intended device type",
            "internal": false,
            "computed": false,
            "shortDescription": "The device type for which the shown creative was intended.",
            "additionalDescription": "Possible values: 'Phone', 'Tablet', 'Desktop' or 'Unknown' (in case no creative was shown, e.g. loading interrupted).",
            "deprecated": false
        },
        {
            "id": "creativeVersion",
            "groups": ["Creative"],
            "label": "Creative version",
            "internal": false,
            "computed": false,
            "shortDescription": "The version of the creative that was served.",
            "additionalDescription": "The version is automatically incremented every time a creative is saved and starts with 1.",
            "deprecated": false
        },
        {
            "id": "templateName",
            "groups": ["Creative"],
            "label": "Template name",
            "internal": true,
            "computed": false,
            "shortDescription": "The name of the template used to track publisher specific formats.",
            "additionalDescription": "The template name can only be set through the API.",
            "deprecated": false
        },
        {
            "id": "placementId",
            "groups": ["Placement"],
            "label": "Placement ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the placement in which the creative was trafficked.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "placementName",
            "groups": ["Placement"],
            "label": "Placement name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the placement in which the creative was trafficked.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "placementStartDate",
            "groups": ["Placement"],
            "label": "Placement start date",
            "internal": false,
            "computed": false,
            "shortDescription": "The start date of the scheduled placement flight.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "placementEndDate",
            "groups": ["Placement"],
            "label": "Placement end date",
            "internal": false,
            "computed": false,
            "shortDescription": "The end date of the scheduled placement flight.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "placementPlannedUnitsKnown",
            "groups": ["Placement"],
            "label": "Planned units known",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates if the placements's planned units are known or not.",
            "additionalDescription": "Possible values are 'Yes' and 'No'.",
            "deprecated": false
        },
        {
            "id": "plannedUnits",
            "groups": ["Placement"],
            "label": "Planned units",
            "internal": false,
            "computed": false,
            "shortDescription": "Placements's planned units.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "unitPrice",
            "groups": ["Placement"],
            "label": "Unit price",
            "internal": false,
            "computed": false,
            "shortDescription": "Unit price.",
            "additionalDescription": "Unit price.",
            "deprecated": false
        },
        {
            "id": "billingMetric",
            "groups": ["Placement"],
            "label": "Billing metric",
            "internal": false,
            "computed": false,
            "shortDescription": "Placements's billing metric.",
            "additionalDescription": "Placements's billing metric.",
            "deprecated": false
        },
        {
            "id": "supplierId",
            "groups": ["Partner"],
            "label": "Supplier ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the supplier.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "supplierName",
            "groups": ["Partner"],
            "label": "Supplier name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the supplier.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "agencyId",
            "groups": ["Partner"],
            "label": "Agency ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the agency.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "agencyName",
            "groups": ["Partner"],
            "label": "Agency name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the agency.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "brandId",
            "groups": ["Partner"],
            "label": "Brand ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the brand/advertiser.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "brandName",
            "groups": ["Partner"],
            "label": "Brand name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the brand/advertiser.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "channelId",
            "groups": ["Channel"],
            "label": "Channel ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the placement in which the creative was trafficked.",
            "additionalDescription": null,
            "deprecated": true
        },
        {
            "id": "channelName",
            "groups": ["Channel"],
            "label": "Channel name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the placement in which the creative was trafficked.",
            "additionalDescription": null,
            "deprecated": true
        },
        {
            "id": "externalAdServer",
            "groups": ["External ad server"],
            "label": "External ad server",
            "internal": false,
            "computed": false,
            "shortDescription": "The external Ad Server through which the ad was trafficked.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalCreativeId",
            "groups": ["External ad server"],
            "label": "External creative ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the creative on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalCreativeName",
            "groups": ["External ad server"],
            "label": "External creative name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the creative on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalPlacementId",
            "groups": ["External ad server"],
            "label": "External placement ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the placement on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalPlacementName",
            "groups": ["External ad server"],
            "label": "External placement name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the placement on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalSiteId",
            "groups": ["External ad server"],
            "label": "External site ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the site on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalSiteName",
            "groups": ["External ad server"],
            "label": "External site name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the site on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalSupplierId",
            "groups": ["External ad server"],
            "label": "External supplier ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the supplier (publisher or exchange) on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "externalSupplierName",
            "groups": ["External ad server"],
            "label": "External supplier name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the supplier (publisher or exchange) on the external Ad Server.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sdk",
            "groups": ["SDK"],
            "label": "SDK",
            "internal": false,
            "computed": false,
            "shortDescription": "The SDK used for serving the ad.",
            "additionalDescription": "For example: 'Web Browser', 'SafeFrame', 'MRAID', 'AdMarvel'. See SDKs for all possible values.",
            "deprecated": false
        },
        {
            "id": "platform",
            "groups": ["Device"],
            "label": "Platform",
            "internal": false,
            "computed": false,
            "shortDescription": "The platform on which the creative was served.",
            "additionalDescription": "Possible values: 'iOS', 'Android', 'Windows Phone', 'WebOS', 'BlackBerry', 'Desktop', 'WAP Browser' or 'Unknown'.",
            "deprecated": false
        },
        {
            "id": "platformVersion",
            "groups": ["Device"],
            "label": "Platform version",
            "internal": true,
            "computed": false,
            "shortDescription": "The version of the platform on which the creative was served.",
            "additionalDescription": "For example: '7.0', '4.3'.",
            "deprecated": false
        },
        {
            "id": "mediaCurrency",
            "groups": ["Money"],
            "label": "Media currency",
            "internal": false,
            "computed": false,
            "shortDescription": "The currency used for buying the media.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "currency",
            "groups": ["Money"],
            "label": "Currency",
            "internal": false,
            "computed": false,
            "shortDescription": "The currency used for buying the media.",
            "additionalDescription": null,
            "deprecated": true
        },
        {
            "id": "countryCode",
            "groups": ["Geography"],
            "label": "Country code",
            "internal": true,
            "computed": false,
            "shortDescription": "The country code, as specified in ISO 3316, with some extensions, or '(unknown)'. See: http://www.maxmind.com/app/iso3166.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "countryName",
            "groups": ["Geography"],
            "label": "Country",
            "internal": true,
            "computed": false,
            "shortDescription": "Country name, or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "regionCode",
            "groups": ["Geography"],
            "label": "Region code",
            "internal": true,
            "computed": false,
            "shortDescription": "Region code (see http://www.maxmind.com/app/city, Region field), or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "regionName",
            "groups": ["Geography"],
            "label": "Region",
            "internal": true,
            "computed": false,
            "shortDescription": "Region name or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "city",
            "groups": ["Geography"],
            "label": "City",
            "internal": true,
            "computed": false,
            "shortDescription": "City name, or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "postalCode",
            "groups": ["Geography"],
            "label": "Postal code",
            "internal": true,
            "computed": false,
            "shortDescription": "For US, Zipcodes, for Canada, postal codes, or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "metroCode",
            "groups": ["Geography"],
            "label": "Metro code",
            "internal": true,
            "computed": false,
            "shortDescription": "Metropolitan Area (US Only), or '(unknown)'. See http://www.maxmind.com/app/metro_code.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "areaCode",
            "groups": ["Geography"],
            "label": "Area code",
            "internal": true,
            "computed": false,
            "shortDescription": "Three digit telephone prefix (US Only), or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "timeZone",
            "groups": ["Geography"],
            "label": "Time zone",
            "internal": true,
            "computed": false,
            "shortDescription": "Time zone identifier in tz/Olson/CLDR database format, e.g. 'Europe/Ljubljana', or '(unknown)'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeClientLoadTimeBucket",
            "groups": ["Loading"],
            "label": "Creative client load time bucket",
            "internal": true,
            "computed": false,
            "shortDescription": "The total time from when an impression was Requested to when it was Served, as measured on the device.",
            "additionalDescription": "Possible values are '0', 100', ..., '59000', '60000' (more than 60 seconds), '(not loaded)' and '(n/a)' (if the ad was requested using a URL and not an embed code).",
            "deprecated": false
        },
        {
            "id": "creativeServerLoadTimeBucket",
            "groups": ["Loading"],
            "label": "Creative server load time bucket",
            "internal": true,
            "computed": false,
            "shortDescription": "The total time from when an impression was Requested to when it was Served, as measured on the ad server.",
            "additionalDescription": "Possible values are '0', 100', ..., '59000', '60000' (more than 60 seconds) and '(not loaded)'.",
            "deprecated": false
        },
        {
            "id": "viewableTimeDetailBucket",
            "groups": ["Viewable time"],
            "label": "Creative viewable time bucket",
            "internal": true,
            "computed": false,
            "shortDescription": "The aggregate time in which some portion of the creative is displayed, as detectable in the current environment.",
            "additionalDescription": "Possible values are '0', '500', '1000', '1500', ..., '59000', '59500', '60000', '(unknown)'.",
            "deprecated": false
        },
        {
            "id": "viewableTimeBucket",
            "groups": ["Viewable time"],
            "label": "Creative viewable time bucket",
            "internal": true,
            "computed": false,
            "shortDescription": "The aggregate time in which some portion of the creative is displayed, as detectable in the current environment.",
            "additionalDescription": "Possible values are '0', '3000', '6000', ..., '57000', '60000', '(unknown)'.",
            "deprecated": false
        },
        {
            "id": "unitName",
            "groups": ["Pages"],
            "label": "Unit",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the unit, for example: 'banner', 'modal'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "isUnitShowAccidental",
            "groups": ["Pages"],
            "label": "Is unit view accidental",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates if the unit was shown to the user as a result of an unintentional interaction.",
            "additionalDescription": "Will be 'N/A' for all non-modal units and 'Yes' or 'No' for modal units.",
            "deprecated": false
        },
        {
            "id": "firstScreenLocalId",
            "groups": ["Pages"],
            "label": "First page Local ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The Local ID of the first page of the unit shown in the impression.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "secondScreenLocalId",
            "groups": ["Pages"],
            "label": "Second page Local ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The Local ID of the second page of the unit shown in the impression.",
            "additionalDescription": "If only one screen is shown, this value will be 'none'.",
            "deprecated": false
        },
        {
            "id": "lastScreenLocalId",
            "groups": ["Pages"],
            "label": "Last page Local ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The Local ID of the last page of the unit shown in the impression.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "screenDepth",
            "groups": ["Pages"],
            "label": "Page depth",
            "internal": false,
            "computed": false,
            "shortDescription": "The number of pages in the unit visited as part of the impression.",
            "additionalDescription": "This number can be expressed as 1, 2, 3, etc. or 20+",
            "deprecated": false
        },
        {
            "id": "screenShowIndex",
            "groups": ["Pages"],
            "label": "Page view index",
            "internal": true,
            "computed": false,
            "shortDescription": "The index of the Page view within the Unit view, starting with 0.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "timeOnScreenKnown",
            "groups": ["Pages"],
            "label": "Time on page known",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates if the time the user spent on the page is known or not.",
            "additionalDescription": "Possible values are 'Yes' and 'No'.",
            "deprecated": false
        },
        {
            "id": "previousScreenLocalId",
            "groups": ["Pages"],
            "label": "Previous page Local ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The Local ID of the previous page of the unit shown in the impression.",
            "additionalDescription": "This value will be '(none)' if this is the first page of the unit that was visited.",
            "deprecated": false
        },
        {
            "id": "screenLocalId",
            "groups": ["Pages"],
            "label": "Page Local ID",
            "internal": false,
            "computed": false,
            "shortDescription": "The Local ID of the page.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "screenTitle",
            "groups": ["Pages"],
            "label": "Page name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the page.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "nextScreenLocalId",
            "groups": ["Pages"],
            "label": "Next page Local ID",
            "internal": true,
            "computed": false,
            "shortDescription": "The Local ID of the next page of the unit shown in the impression.",
            "additionalDescription": "This value will be '(none)' if this is the last page of the unit that was visited.",
            "deprecated": false
        },
        {
            "id": "sharedUrl",
            "groups": ["Social"],
            "label": "Shared url",
            "internal": false,
            "computed": false,
            "shortDescription": "The URL that was shared in a message or on a social network.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "shareType",
            "groups": ["Social"],
            "label": "Shared type",
            "internal": true,
            "computed": false,
            "shortDescription": "The type of object that was shared in a message or on a social network.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sharedAssetBlobHash",
            "groups": ["Social"],
            "label": "Shared asset blob hash",
            "internal": true,
            "computed": false,
            "shortDescription": "The blob hash of the asset (predefined image, video or user-generated content) that was shared in a message or on a social network.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "label",
            "groups": ["Actions", "Video"],
            "label": "Reporting label",
            "internal": false,
            "computed": false,
            "shortDescription": "A text description used for reporting, as specified in the creative.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "imageBlobHash",
            "groups": ["Actions"],
            "label": "Image blob hash",
            "internal": false,
            "computed": false,
            "shortDescription": "The blob hash of the image that the user attempted to download.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoKey",
            "groups": ["Video"],
            "label": "Video key",
            "internal": false,
            "computed": false,
            "shortDescription": "A key to identify different videos.",
            "additionalDescription": "This dimension should be used when presenting the user with a list of videos. It is derived from the video label and source (file or URL).",
            "deprecated": false
        },
        {
            "id": "videoSourceType",
            "groups": ["Video"],
            "label": "Source type",
            "internal": false,
            "computed": false,
            "shortDescription": "The source type of the video file. Either 'FILE' or 'URL'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoSource",
            "groups": ["Video"],
            "label": "Source",
            "internal": false,
            "computed": false,
            "shortDescription": "The source of the video.",
            "additionalDescription": "When the videoSourceType is 'File', the source will be the video blobHash. When the videoSourceType is URL, the source is the URL of the video. The max length for this field is 64 characters, so URLs may be cropped.",
            "deprecated": false
        },
        {
            "id": "videoPlayerMode",
            "groups": ["Video"],
            "label": "Player mode",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates if the video was played 'fullscreen' or 'inline'.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoLength",
            "groups": ["Video"],
            "label": "Video length",
            "internal": false,
            "computed": false,
            "shortDescription": "The length of the video in seconds, rounded up to the nearest second.",
            "additionalDescription": "If video length cannot be determined, the value will be '(unknown)'.",
            "deprecated": false
        },
        {
            "id": "videoActualAudibility",
            "groups": ["Video"],
            "label": "Video play audibility",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates whether a given Video was played with or without sound.",
            "additionalDescription": "Possible values are 'audible', 'muted' and '(unknown)'.",
            "deprecated": false
        },
        {
            "id": "videoIntendedAudibility",
            "groups": ["Video"],
            "label": "Intended video audibility",
            "internal": false,
            "computed": false,
            "shortDescription": "Intended audibility for a given Inline Video component.",
            "additionalDescription": "Possible values are 'audible', 'muted' and '(unknown)'. Does not necessarily mean that the Inline Video actually started playing with or without sound, just what the setting was.",
            "deprecated": false
        },
        {
            "id": "videoPlaySetting",
            "groups": ["Video"],
            "label": "Video play setting",
            "internal": false,
            "computed": false,
            "shortDescription": "The initial setting of how a given Video play started.",
            "additionalDescription": "Possible values are 'Autoplay', 'User-initiated' and '(unknown)'.",
            "deprecated": false
        },
        {
            "id": "videoSecond",
            "groups": ["Video"],
            "label": "Second marker",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates what specific second a video has played through using each individual second in the entire length of the video as an index.",
            "additionalDescription": "'0' represents the start of first second, '1' the next second and videoLength - 1 represents the last second. The metrics videoSecondViews and videoSecondUniqueViews available by this dimension.",
            "deprecated": false
        },
        {
            "id": "videoQuarter",
            "groups": ["Video"],
            "label": "Quarter marker",
            "internal": false,
            "computed": false,
            "shortDescription": "Indicates what specific quarter a video has played through using each quartile within the entire length of the video as an index.",
            "additionalDescription": "One of '0' (start of the first quarter, equal to starts), '1' (end of Q1, start of Q2), '2', '3', '4' (end of Q4, equal to finishes). Metrics videoQuarterViews and videoQuarterUniqueViews available by this dimension.",
            "deprecated": false
        },
        {
            "id": "conversionGroupId",
            "groups": ["Conversion tracking"],
            "label": "Conversion group",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of a conversion group which is used for organizing conversion trackers into logical groups. It may represent an advertiser website, a campaign-specific landing page, etc.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id" : "conversionGroupName",
            "groups": ["Conversion tracking"],
            "label": "Conversion group name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of a conversion group which is used for organizing conversion trackers into logical groups. It may represent an advertiser website, a campaign-specific landing page, etc.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "conversionTrackerId",
            "groups": ["Conversion tracking"],
            "label": "Conversion tracker",
            "internal": false,
            "computed": false,
            "shortDescription": "The ID of the conversion tracker.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id" : "conversionTrackerName",
            "groups": ["Conversion tracking"],
            "label": "Conversion tracker name",
            "internal": false,
            "computed": false,
            "shortDescription": "The name of the conversion tracker.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "aggregatorMetric",
            "groups": ["Aggregators"],
            "label": "Aggregator metric",
            "internal": true,
            "computed": false,
            "shortDescription": "The aggregator metric name.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "aggregatorEncodedDimensions",
            "groups": ["Aggregators"],
            "label": "Encoded aggregator dimensions",
            "internal": true,
            "computed": false,
            "shortDescription": "A query-string structured list of custom aggregator dimension names and values.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "experimentScopeValue1",
            "groups": ["Experiments"],
            "label": "Experiment scope value 1st value",
            "internal": true,
            "computed": false,
            "shortDescription": "Scope value of the first part of experiment's scope keys.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "experimentScopeValue2",
            "groups": ["Experiments"],
            "label": "Experiment scope value 2nd value",
            "internal": true,
            "computed": false,
            "shortDescription": "Scope value of the second part of experiment's scope keys.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "experimentScopeValue3",
            "groups": ["Experiments"],
            "label": "Experiment scope value 3rd value",
            "internal": true,
            "computed": false,
            "shortDescription": "Scope value of the third part of experiment's scope keys.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "experimentClazzId",
            "groups": ["Experiments"],
            "label": "Experiment class ID",
            "internal": true,
            "computed": false,
            "shortDescription": "ID representing different experiment classes.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "experimentKey",
            "groups": ["Experiments"],
            "label": "Experiment key",
            "internal": true,
            "computed": false,
            "shortDescription": "Key that identifies each experiment instance. Is unique per Experiment class ID and scope keys defined for it.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "optimizer",
            "groups": ["Experiments"],
            "label": "Optimizer",
            "internal": true,
            "computed": false,
            "shortDescription": "Optimizer that was used to choose variant for this impression.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "variant",
            "groups": ["Experiments"],
            "label": "Variant",
            "internal": true,
            "computed": false,
            "shortDescription": "Variant of the experiment.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "errorType",
            "groups": ["Errors"],
            "label": "Type of error",
            "internal": false,
            "computed": false,
            "shortDescription": "The type of `Error`.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "error",
            "groups": ["Errors"],
            "label": "Error",
            "internal": false,
            "computed": false,
            "shortDescription": "The specific error.",
            "additionalDescription": null,
            "deprecated": false
        }
    ],

    "metrics": [
        {
            "id": "sessions",
            "groups": ["Requested impressions"],
            "label": "Requested impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of ad requests received by AdCreator.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "fallbackSessions",
            "groups": ["Requested impressions"],
            "label": "Fallback impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of Social Rich Media ad requests in which the user was redirected to a fallback URL.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "nonFallbackSessions",
            "groups": ["Requested impressions"],
            "label": "Non-fallback impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of Social Rich Media ad requests in which the user was not redirected to a fallback URL.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "sessions-fallbackSessions"
        },
        {
            "id": "sessionsWithGpsPassed",
            "groups": ["Requested impressions"],
            "label": "Impressions with GPS passed",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions in which the user's GPS location was passed through the tag or URL.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithPlatformAdvIdRequested",
            "groups": ["Requested impressions"],
            "label": "Impressions with advertising identifier requested in the tag",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions for which the platform advertising id was requested in the Celtra tag.",
            "additionalDescription": "Does not matter whether the ad server then subsequently passed the valid advertiser id or not.",
            "deprecated": false
        },
        {
            "id": "sessionsWithPlatformAdvIdPassed",
            "groups": ["Requested impressions"],
            "label": "Impressions with advertising identifier passed",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions with advertising identifier passed through the tag or URL.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithPlatformAdvIdTrackingLimited",
            "groups": ["Requested impressions"],
            "label": "Impressions with advertising identifier tracking limited",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions for which we know that the user has limited advertising tracking.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithPlatformAdvIdTrackingUnlimited",
            "groups": ["Requested impressions"],
            "label": "Impressions with advertising identifier tracking unlimited",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions for which we know that the user has not limited advertising tracking.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeLoads",
            "groups": ["Served impressions"],
            "label": "Served impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times where the creative was loaded to the point where it could be displayed.",
            "additionalDescription": "For most ad formats, this means the master and first page of the banner unit have loaded. For Pull and Slider ad formats, the first page of the main unit must have loaded as well. In all cases, the SDK must have initialized.",
            "deprecated": false
        },
        {
            "id": "creativeLoadRate",
            "groups": ["Served impressions"],
            "label": "Serve rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Served impressions` to `Requested impressions`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeLoads / sessions) * 100"
        },
        {
            "id": "creativeViews00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Core viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Served impressions` in which some portion of the creative is displayed for some amount of time, as detectable in the current environment.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeNonViews00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Core non-viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Served impressions` in which the creative was not displayed to the user.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeLoadsWithMeasurableViewability00 - creativeViews00"
        },
        {
            "id": "creativeLoadsWithMeasurableViewability00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Served impressions with determined core viewability",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Served impressions` in which core viewability was determined.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeLoadsWithoutMeasurableViewability00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Served impressions with undetermined core viewability",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Served impressions` in which core viewability could not be determined.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeLoads - creativeLoadsWithMeasurableViewability00"
        },
        {
            "id": "potentialCreativeViews00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Potentially core viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The sum of `Core viewable impressions` and `Served impressions with undetermined core viewability`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeViews00 + (creativeLoads - creativeLoadsWithMeasurableViewability00)"
        },
        {
            "id": "pctCreativeLoadsWithMeasurableViewability00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Core measured rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Served impressions with determined core viewability` to `Served impressions`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeLoadsWithMeasurableViewability00 / creativeLoads) * 100"
        },
        {
            "id": "viewableRate00",
            "groups": ["Served impressions (Core viewability)"],
            "label": "Core viewable rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Core viewable impressions` to `Served impressions with determined core viewability`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeViews00 / creativeLoadsWithMeasurableViewability00) * 100"
        },
        {
            "id": "creativeViews501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "IAB viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Served impressions` in which at least 30% (for large size ads) or at least 50% of the creative (for all other ads) was displayed to the user for at least 1 continuous second.",
            "additionalDescription": "Large size ads are ads of 242,500 pixels or more.",
            "deprecated": false
        },
        {
            "id": "creativeNonViews501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "IAB non-viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Served impressions` in which at least 30% (for large size ads) or at least 50% of the creative (for all other ads) was NOT displayed to the user for at least 1 continuous second.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeLoadsWithMeasurableViewability501 - creativeViews501"
        },
        {
            "id": "creativeLoadsWithMeasurableViewability501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "Served impressions with determined IAB viewability",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Served impressions` in which IAB viewability was determined.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeLoadsWithoutMeasurableViewability501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "Served impressions with undetermined IAB viewability",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Served impressions` in which IAB viewability could not be determined.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeLoads - creativeLoadsWithMeasurableViewability501"
        },
        {
            "id": "potentialCreativeViews501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "Potentially IAB viewable impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The sum of `IAB viewable impressions` and `Served impressions with undetermined IAB viewability`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeViews501 + (creativeLoads - creativeLoadsWithMeasurableViewability501)"
        },
        {
            "id": "pctCreativeLoadsWithMeasurableViewability501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "IAB measured rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Served impressions with determined IAB viewability` to `Served impressions`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeLoadsWithMeasurableViewability501 / creativeLoads) * 100"
        },
        {
            "id": "viewableRate501",
            "groups": ["Served impressions (IAB viewability)"],
            "label": "IAB viewable rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `IAB viewable impressions` to `Served impressions with determined IAB viewability`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeViews501 / creativeLoadsWithMeasurableViewability501) * 100"
        },
        {
            "id": "viewableTime",
            "groups": ["Served impressions (Viewable time)"],
            "label": "Viewable time",
            "internal": true,
            "format": "%.2f",
            "computed": false,
            "shortDescription": "The aggregate time in which some portion of the creative is displayed, as detectable in the current environment.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithViewableTime",
            "groups": ["Served impressions (Viewable time)"],
            "label": "Impressions with viewable time",
            "internal": true,
            "format": "%.2f",
            "computed": false,
            "shortDescription": "The number of impressions where `Viewable time` is greater than zero.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "avgViewableTime",
            "groups": ["Served impressions (Viewable time)"],
            "label": "Average viewable time",
            "internal": true,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Viewable time` to `Impressions with viewable time`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "viewableTime / sessionsWithViewableTime"
        },
        {
            "id": "creativeShows",
            "groups": ["Shown impressions"],
            "label": "Shown impressions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions in which a creative was shown to the user.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeViews",
            "groups": ["Shown impressions"],
            "label": "Shown impressions",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of impressions in which a creative was shown to the user.",
            "additionalDescription": null,
            "deprecated": true,
            "formula": "creativeShows"
        },
        {
            "id": "creativeShowRate",
            "groups": ["Shown impressions"],
            "label": "Show rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The percent of `Served impressions` that were shown.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(creativeShows / creativeLoads) * 100"
        },
        {
            "id": "creativeShowsWithMeasurableViewability00",
            "groups": ["Shown impressions"],
            "label": "Shown impressions (measurable for core viewability)",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Shown impressions` in which core viewability could be determined.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeShowsWithMeasurableViewability501",
            "groups": ["Shown impressions"],
            "label": "Shown impressions (measurable for IAB viewability)",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Shown impressions` in which IAB viewability could be determined.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "creativeShowsWithoutMeasurableViewability00",
            "groups": ["Shown impressions"],
            "label": "Shown impressions (not measurable for core viewability)",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Shown impressions` in which core viewability could not be determined.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeShows - creativeShowsWithMeasurableViewability00"
        },
        {
            "id": "creativeShowsWithoutMeasurableViewability501",
            "groups": ["Shown impressions"],
            "label": "Shown impressions (not measurable for IAB viewability)",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of `Shown impressions` in which IAB viewability could not be determined.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "creativeShows - creativeShowsWithMeasurableViewability501"
        },
        {
            "id": "sessionsWithExpandAttempt",
            "groups": ["Expansions"],
            "label": "Ad expansions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions in which the ad expanded.",
            "additionalDescription": "The expansion is typically but not necessarily triggered by a user action within the banner unit. For Pull and Slider, sliding over 50% or flicking will cause expansion.",
            "deprecated": false
        },
        {
            "id": "sessionsWithIntentionalExpandAttempt",
            "groups": ["Expansions"],
            "label": "Intentional ad expansions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions in which the user intentionally expanded the ad.",
            "additionalDescription": "For Pull and Slider, sliding over 50% or flicking will cause expansion.",
            "deprecated": false
        },
        {
            "id": "expansionRate",
            "groups": ["Expansions"],
            "label": "Ad expansion rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Ad expansions` to `Potentially core viewable impressions`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(sessionsWithExpandAttempt/(creativeViews00 + (creativeLoads - creativeLoadsWithMeasurableViewability00)))*100"
        },
        {
            "id": "unitShows",
            "groups": ["Pages"],
            "label": "Unit views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times a creative unit has been displayed to the user.",
            "additionalDescription": "A unit is considered viewed at most once per impression. Matches the `Unique page views` of the first page of the unit.",
            "deprecated": false
        },
        {
            "id": "unitViews",
            "groups": ["Pages"],
            "label": "Unit views",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of times a creative unit has been displayed to the user.",
            "additionalDescription": "A unit is considered viewed at most once per impression. Matches the `Unique page views` of the first page of the unit.",
            "deprecated": true,
            "formula": "unitShows"
        },
        {
            "id": "screenShows",
            "groups": ["Pages"],
            "label": "Page views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times a page has been displayed to the user.",
            "additionalDescription": "The loading screen, if viewed, is not considered a page.",
            "deprecated": false
        },
        {
            "id": "screenViews",
            "groups": ["Pages"],
            "label": "Page views",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of times a page has been displayed to the user.",
            "additionalDescription": "The loading screen, if viewed, is not considered a page.",
            "deprecated": true,
            "formula": "screenShows"
        },
        {
            "id": "uniqueScreenShows",
            "groups": ["Pages"],
            "label": "Unique page views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of different (unique) pages displayed (excluding loading screen) within an impression.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "uniqueScreenViews",
            "groups": ["Pages"],
            "label": "Unique page views",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of different (unique) pages displayed (excluding loading screen) within an impression.",
            "additionalDescription": null,
            "deprecated": true,
            "formula": "uniqueScreenShows"
        },
        {
            "id": "sessionsWithInteraction",
            "groups": ["Engagement"],
            "label": "Ad engagements",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions where the user interacted with the creative.",
            "additionalDescription": "For Pull and Slider ad formats, only sliding is considered an interaction, not e.g. tapping. This metric may be lower than expansions if the creative was configured to expand automatically.",
            "deprecated": false
        },
        {
            "id": "interactions",
            "groups": ["Engagement"],
            "label": "Ad engagements",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of impressions where the user interacted with the creative.",
            "additionalDescription": "For Pull and Slider ad formats, only sliding is considered an interaction, not e.g. tapping. This metric may be lower than expansions if the creative was configured to expand automatically.",
            "deprecated": true,
            "formula": "sessionsWithInteraction"
        },
        {
            "id": "interactionRate",
            "groups": ["Engagement"],
            "label": "Ad engagement rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Ad engagements` to `Potentially core viewable impressions`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(sessionsWithInteraction/(creativeViews00 + (creativeLoads - creativeLoadsWithMeasurableViewability00)))*100"
        },
        {
            "id": "firstClickThroughs",
            "groups": ["Engagement"],
            "label": "First click-throughs",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions where the user left the publisher property to visit an advertiser property.",
            "additionalDescription": null,
            "deprecated": true
        },
        {
            "id": "firstClickThroughRate",
            "groups": ["Engagement"],
            "label": "First click-through rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The percent of `Shown impressions` in which the user left the publisher property to visit an advertiser property.",
            "additionalDescription": null,
            "deprecated": true,
            "formula": "(firstClickThroughs/creativeShows)*100"
        },
        {
            "id": "engagements",
            "groups": ["Engagement"],
            "label": "Engagements (old)",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions where the user has interacted with the creative, not only to click-through.",
            "additionalDescription": null,
            "deprecated": true
        },
        {
            "id": "unitShowsWithInteraction",
            "groups": ["Engagement"],
            "label": "Unit engagements",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of unit views in which the user interacted with the unit.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "unitViewsWithInteraction",
            "groups": ["Engagement"],
            "label": "Unit engagements",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of unit views in which the user interacted with the unit.",
            "additionalDescription": null,
            "deprecated": true,
            "formula": "unitShowsWithInteraction"
        },
        {
            "id": "unitInteractionRate",
            "groups": ["Engagement"],
            "label": "Unit engagement rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Unit engagements` to `Unit views`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "unitShowsWithInteraction/unitShows*100"
        },
        {
            "id": "screenShowsWithInteraction",
            "groups": ["Engagement"],
            "label": "Page engagements",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of page views in which the user interacted with the page.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "screenViewsWithInteraction",
            "groups": ["Engagement"],
            "label": "Page engagements",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of page views in which the user interacted with the page.",
            "additionalDescription": null,
            "deprecated": true,
            "formula": "screenShowsWithInteraction"
        },
        {
            "id": "screenInteractionRate",
            "groups": ["Engagement"],
            "label": "Page engagement rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Page engagements` to `Page views`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "screenShowsWithInteraction/screenShows*100"
        },
        {
            "id": "timeOnScreen",
            "groups": ["Engagement"],
            "label": "Time spent",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The aggregate time users have spent viewing the ad content.",
            "additionalDescription": "The time is measured from when a page is first displayed until the last detectable interaction. We assume 0 when it can't be computed.",
            "deprecated": false
        },
        {
            "id": "avgTimeOnScreen",
            "groups": ["Engagement"],
            "label": "Avg. time spent on page",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Time spent` to `Page views`. The average time users have spent viewing the page(s).",
            "additionalDescription": "Break down by the `Page name` dimension.",
            "deprecated": false,
            "formula": "timeOnScreen / screenShows"
        },
        {
            "id": "avgTimeOnUnit",
            "groups": ["Engagement"],
            "label": "Avg. time spent on unit",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Time spent` to `Unit views`. The average time users have spent viewing the unit(s).",
            "additionalDescription": "Break down by the `Unit` dimension.",
            "deprecated": false,
            "formula": "timeOnScreen / unitShows"
        },
        {
            "id": "sessionsWithClickReportedToSupplier",
            "groups": ["Engagement"],
            "label": "Clicks reported to supplier",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions where a click was reported to the supplier.",
            "additionalDescription": "A click is reported to the supplier by calling the URL passed in the clickUrl parameter of the tag/URL. This metric may differ from Clicks if a URL was not provided, or if the supplier overrode the event to consider as a click.",
            "deprecated": false
        },
        {
            "id": "sessionsWithClick",
            "groups": ["Engagement"],
            "label": "Clicks",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions where a click occured.",
            "additionalDescription": "By default, all `Ad engagements` are considered clicks, but a more specific event may be chosen for the creative by changing the Click event definition.",
            "deprecated": false
        },
        {
            "id": "customEventOccurs",
            "groups": ["Actions"],
            "label": "Custom event occurrences",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of custom event occurrences.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithCustomEventOccurrence",
            "groups": ["Actions"],
            "label": "Impressions with custom event occurrence",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The number of impressions with custom event occurrence with a specific label.",
            "additionalDescription": "Break down by the Reporting label dimension to display per-label numbers.",
            "deprecated": true,
            "formula": "customEventOccursUniqueBySession"
        },
        {
            "id": "customEventOccursUniqueBySession",
            "groups": ["Actions"],
            "label": "Custom event occurrences unique by impression",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of custom event occurrences unique by Impression and Reporting label.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "urlOpens",
            "groups": ["Actions"],
            "label": "Website opens",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times the user was led to an external website.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "storeOpens",
            "groups": ["Actions"],
            "label": "App store opens",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times the user was led to the app store.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "phoneCalls",
            "groups": ["Actions"],
            "label": "Phone calls",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of phone calls initiated from the ad.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "pinterestPinAttempts",
            "groups": ["Actions"],
            "label": "Pin on Pinterest attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times the user was led to the Pinterest pin page.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "photoSelections",
            "groups": ["Actions"],
            "label": "Photo selections",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times the user selected a photo.",
            "additionalDescription": "For Desktop platform this means that the user selected an image from the file browser, whereas for mobile this can be a consequence of the user taking a photo or selecting it from existing photos on the device.",
            "deprecated": false
        },
        {
            "id": "facebookLikes",
            "groups": ["Actions"],
            "label": "Facebook Likes",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users liked a Facebook page through the ad.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "facebookShareAttempts",
            "groups": ["Actions"],
            "label": "Facebook share attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users attempted to share creative content on Facebook.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "facebookShareSuccesses",
            "groups": ["Actions"],
            "label": "Facebook share successes",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users successfully shared creative content on Facebook.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "twitterShareAttempts",
            "groups": ["Actions"],
            "label": "Twitter share attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users attempted to share creative content on Twitter.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "whatsAppShareAttempts",
            "groups": ["Actions"],
            "label": "WhatsApp share attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users attempted to share creative content on WhatsApp.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "facebookShareRate",
            "groups": ["Actions"],
            "label": "Facebook share success rate",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Facebook share successes` to `Facebook share attempts`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(facebookShareSuccesses/facebookShareAttempts)*100"
        },
        {
            "id": "twitterProfileOpens",
            "groups": ["Actions"],
            "label": "Twitter profile opens",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users have opened a Twitter profile.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "tweetPageOpens",
            "groups": ["Actions"],
            "label": "Tweet attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times the user was led to the Twitter tweet page.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "formSubmissionAttempts",
            "groups": ["Actions"],
            "label": "Form submission attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users have attempted to submit a form.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "formSubmissionSuccesses",
            "groups": ["Actions"],
            "label": "Form submission successes",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users successfully submitted a form.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "saveImageAttempts",
            "groups": ["Actions"],
            "label": "Save image attempts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times users attempted to save an image.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoShows",
            "groups": ["Video"],
            "label": "Video feature views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times a particular Inline video feature has been displayed to the user.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoManualPlayRate",
            "groups": ["Video"],
            "label": "Video play rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `User-initiated video plays` to `Video feature views`.",
            "additionalDescription": "This metric is not defined for automatic video plays, video plays from 'Play Video' and 'Play Video from URL' actions and video plays from Youtube component.",
            "deprecated": false,
            "formula": "(videoManualPlays/videoShows)*100"
        },
        {
            "id": "videoPlays",
            "groups": ["Video"],
            "label": "Video plays",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of initiated video playbacks. An initiated video playback is counted any time the video player starts loading the video file.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoTrackablePlays",
            "groups": ["Video"],
            "label": "Measurable video plays",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays` in which video tracking was available.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoPctTrackable",
            "groups": ["Video"],
            "label": "Video measured rate",
            "internal": false,
            "format": "%.0f",
            "computed": true,
            "shortDescription": "The ratio of `Measurable video plays` to `Video plays`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoTrackablePlays/videoPlays)*100"
        },
        {
            "id": "videoUniqueStarts",
            "groups": ["Video"],
            "label": "Video starts",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Measurable video plays` in which the video started playing.",
            "additionalDescription": "A started video play is counted each time the first segment of video has been successfully loaded and the video has been played for at least one second.",
            "deprecated": false
        },
        {
            "id": "videoStartRate",
            "groups": ["Video"],
            "label": "Video start rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video starts` to `Measurable video plays`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoUniqueStarts/videoTrackablePlays)*100"
        },
        {
            "id": "videoAutoPlays",
            "groups": ["Video"],
            "label": "Automatic video plays",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays` in which the video was configured to start automatically.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoManualPlays",
            "groups": ["Video"],
            "label": "User-initiated video plays",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays` that happened as a consequence of a user interaction (and not automatically).",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoPlaysWithSoundOff",
            "groups": ["Video"],
            "label": "Video plays initially muted",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays` where the video was initially muted.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoPlaysWithSoundOn",
            "groups": ["Video"],
            "label": "Video plays initially audible",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays` where the video was initially audible.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoMutes",
            "groups": ["Video"],
            "label": "Video mutes",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays initially audible`, in which the video was subsequently muted.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoMuteRate",
            "groups": ["Video"],
            "label": "Video mute rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video mutes` to `Video plays initially audible`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoMutes/videoPlaysWithSoundOn)*100"
        },
        {
            "id": "videoUnmutes",
            "groups": ["Video"],
            "label": "Video unmutes",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Video plays initially muted`, in which the video was subsequently unmuted.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoUnmuteRate",
            "groups": ["Video"],
            "label": "Video unmute rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video unmutes` to `Video plays initially muted`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoUnmutes/videoPlaysWithSoundOff)*100"
        },

        {
            "id": "videoPlayTime",
            "groups": ["Video"],
            "label": "Video play time",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The aggregate time (in seconds) a video has played through, rounded up to the nearest second.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoAvgPlayTime",
            "groups": ["Video"],
            "label": "Avg. video play time",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Video play time` to `Video starts`. The average time a video has played through.",
            "additionalDescription": "Can be more than `Video length` if the video has played through more than once in an impression.",
            "deprecated": false,
            "formula": "videoPlayTime/videoUniqueStarts"
        },
        {
            "id": "videoUniquePlayTime",
            "groups": ["Video"],
            "label": "Video unique play time",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The aggregate non-overlapping time (in seconds) a video has played through, rounded up to the nearest second.",
            "additionalDescription": "Overlapping segments of the same video play are counted only once.",
            "deprecated": false
        },
        {
            "id": "videoMuteTime",
            "groups": ["Video"],
            "label": "Video mute time",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The aggregate time (in seconds) a video has played through with sound disabled, rounded up to the nearest second.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "videoAvgMuteTime",
            "groups": ["Video"],
            "label": "Avg. video mute time",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Video mute time` to `Video starts`. The average time a video has played through with muted audio.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "videoMuteTime/videoUniqueStarts"
        },
        {
            "id": "videoAudibleTime",
            "groups": ["Video"],
            "label": "Video audible time",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The aggregate time (in seconds) a video has played through with audible sound, rounded up to the nearest second.",
            "additionalDescription": "Audibility is measured through the video player and not by device audio settings.",
            "deprecated": false
        },
        {
            "id": "videoAvgAudibleTime",
            "groups": ["Video"],
            "label": "Avg. audible video time",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The ratio of `Video audible time` to `Video starts`. The average time a video has played through with audible sound.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "videoAudibleTime/videoUniqueStarts"
        },
        {
            "id": "videoAudibilityRate",
            "groups": ["Video"],
            "label": "Video audibility rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video audible time` to `Video play time`. The average percent of video played with audible sound.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoAudibleTime/videoPlayTime)*100"
        },
        {
            "id": "videoSoundOffPlayRate",
            "groups": ["Video"],
            "label": "Video sound off play rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video plays initially muted` to `Video plays`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoPlaysWithSoundOff/videoPlays)*100"
        },
        {
            "id": "videoSoundOnPlayRate",
            "groups": ["Video"],
            "label": "Video sound on play rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video plays initially audible` to `Video plays`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoPlaysWithSoundOn/videoPlays)*100"
        },
        {
            "id": "videoUniqueFinishes",
            "groups": ["Video"],
            "label": "Video completions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of `Measurable video plays` in which the video played to the end.",
            "additionalDescription": "Video is assumed to have played until the end if it played until last two seconds before the end.",
            "deprecated": false
        },
        {
            "id": "videoFinishRate",
            "groups": ["Video"],
            "label": "Video completion rate",
            "internal": false,
            "format": "%.0f",
            "computed": true,
            "shortDescription": "The ratio of `Video completions` to `Video starts`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoUniqueFinishes/videoUniqueStarts)*100"
        },
        {
            "id": "videoSecondViews",
            "groups": ["Video"],
            "label": "Video second marker views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times video played through a specific 'second marker' of the video.",
            "additionalDescription": "Break down by the `Second marker` dimension to display per-second video attention.",
            "deprecated": false
        },
        {
            "id": "videoSecondUniqueViews",
            "groups": ["Video"],
            "label": "Video second marker unique views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times video played through a specific 'second marker' of the video, unique per Video play.",
            "additionalDescription": "Break down by the `Second marker` dimension to display per-second video attention.",
            "deprecated": false
        },
        {
            "id": "videoSecondAttention",
            "groups": ["Video"],
            "label": "Avg. video second marker views",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The average number of times a 'second marker' was passed in a Trackable video play attempt.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "videoSecondViews/videoTrackablePlays"
        },
        {
            "id": "videoQuarterViews",
            "groups": ["Video"],
            "label": "Video quarter marker views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times video played through a specific 'quarter marker' of the video.",
            "additionalDescription": "Break down by the `Quarter marker` dimension to display per-quarter video attention.",
            "deprecated": false
        },
        {
            "id": "videoQuarterUniqueViews",
            "groups": ["Video"],
            "label": "Video quarter marker unique views",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times video played through a specific 'quarter marker' of the video, unique per Video play.",
            "additionalDescription": "Break down by the `Quarter marker` dimension to display per-quarter video attention.",
            "deprecated": false
        },
        {
            "id": "videoQuarterAttention",
            "groups": ["Video"],
            "label": "Avg. video quarter marker views",
            "internal": false,
            "format": "%d",
            "computed": true,
            "shortDescription": "The average number of times a 'quarter marker' was passed in a Trackable video play attempt.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "videoQuarterViews/videoTrackablePlays"
        },
        {
            "id": "videoSeconds",
            "groups": ["Video"],
            "label": "Consumable video seconds",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The product of `Video starts` and `Video length`.",
            "additionalDescription": "For every Video start, the length of the Video is added to `Consumable video seconds`.",
            "deprecated": false
        },
        {
            "id": "videoConsumptionRate",
            "groups": ["Video"],
            "label": "Video consumption rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Video unique play time` to `Consumable video seconds`. The average percent of video consumed.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(videoUniquePlayTime / videoSeconds) * 100"
        },
        {
            "id": "sessionsWithAttributedConversion",
            "groups": ["Conversion tracking"],
            "label": "Impressions with conversion",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions with attributed conversion. 0 or 1 per session.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "sessionsWithAttributedConversionUniqueByTracker",
            "groups": ["Conversion tracking"],
            "label": "Impressions with conversion unique by tracker",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of impressions with attributed conversion unique by tracker. 0 or 1 per impressions per tracker.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "organicConversions",
            "groups": ["Conversion tracking"],
            "label": "Organic conversions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of conversions that could not be linked back to a specific AdCreator session.",
            "additionalDescription": "Possible reasons are that the creative was not shown to the user prior to converting or time between impression and conversion was above allowed limit.",
            "deprecated": false
        },
        {
            "id": "attributedConversions",
            "groups": ["Conversion tracking"],
            "label": "Attributed conversions",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of conversions that could be linked back to a specific AdCreator session.",
            "additionalDescription": "Conversions have post click model meaning they can only be linked to AdCreator sessions with a Website open.",
            "deprecated": false
        },
        {
            "id": "conversionRate",
            "groups": ["Conversion tracking"],
            "label": "Conversion rate",
            "internal": false,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Attributed conversions` to `Website opens`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "( attributedConversions / urlOpens ) * 100"
        },
        {
            "id": "aggregatorValue",
            "groups": ["Aggregators"],
            "label": "Aggregator value",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The value of a given aggregator.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "cost",
            "groups": ["Money"],
            "label": "Cost",
            "internal": false,
            "format": "%.2f",
            "computed": false,
            "shortDescription": "The cost of the media.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "variantChoices",
            "groups": ["Experiments"],
            "label": "Variant choices",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times a variant was chosen.",
            "additionalDescription": null,
            "deprecated": false
        },
        {
            "id": "exposures",
            "groups": ["Experiments"],
            "label": "Exposures",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times a variant was chosen and displayed to users.",
            "additionalDescription": "This will be lower than metric variantChoices, for example when the experiment takes place on second page of modal unit.",
            "deprecated": false
        },
        {
            "id": "exposureRate",
            "groups": ["Experiments"],
            "label": "Exposure rate",
            "internal": true,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Exposures` to `Variant choices`.",
            "additionalDescription": "Break down by the `Experiment key` dimension.",
            "deprecated": false,
            "formula": "(exposures / variantChoices) * 100"
        },
        {
            "id": "successes",
            "groups": ["Experiments"],
            "label": "Successes",
            "internal": true,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times there was a success (experiment-specific) for chosen and displayed variant.",
            "additionalDescription": "The definition of success depends on the experiment: click for button, play video for videos, interaction for swipey, etc.",
            "deprecated": false
        },
        {
            "id": "successRate",
            "groups": ["Experiments"],
            "label": "Success rate",
            "internal": true,
            "format": "%.2f",
            "computed": true,
            "shortDescription": "The ratio of `Successes` to `Exposures`.",
            "additionalDescription": null,
            "deprecated": false,
            "formula": "(successes / exposures) * 100"
        },
        {
            "id": "errors",
            "groups": ["Errors"],
            "label": "Errors",
            "internal": false,
            "format": "%d",
            "computed": false,
            "shortDescription": "The number of times an error occurred.",
            "additionalDescription": "This metric is 0 or 1 per Requested impression for a specific `Error`.",
            "deprecated": false
        }
    ]
};

Object.keys(constants).forEach(function(key) {
    function ucfirst(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    
    constants['get'+ucfirst(key).slice(0, -1)+'ById'] = function(id, nullOk) {
        var collection = constants[key];
        for (var i = 0; i < collection.length; i++) {
            var elem = collection[i];
            if (elem.id === id)
                return elem;
        }
        
        if (nullOk)
            return null;
        else
            throw new Error("constants."+key+" does not contain an element with id '"+id+"'");
    };
});

constants.getExpandableFormats = function() {
    return constants.formats.filter(function(format) {
        return format.units.exists(function(unit) { return unit.expandable; });
    });
};

// only do this for constants.json
if (constants.metrics && constants.metrics.length > 0) {
    var parse = require('esprima').parse;

    constants.metrics.filter(function(m) { return m.computed; }).forEach(function(m) {
        m.ast = parse(m.formula).body[0].expression;
    });
}

module.exports = constants;