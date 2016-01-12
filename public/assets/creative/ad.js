var signal = new signals.Signal( )
signal.add( handleSignal )
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )
var lastClicked = 8
var that = this

function handleSignal( inSignal ) {
    switch ( inSignal.type ) {
        case "WebComponentsReady":
        case "adinitialized":
            break
        case "DOMContentLoaded":
            if ( isMobile ) {
                $( "#invitationImage" ).setAttribute( "source", "tapToExpand.jpg" )
            }
            initCards( )
            break
        case "pagepresenting":
            document.getElementById( 'engaged' ).style.display = "block"
            document.getElementById( 'myContent' ).style.display = "none"
            animateIn( )
            break
        case "expandStart":
        case "fullscreenExpandStart":
            break
        case "expandFinish":
        case "fullscreenExpandFinish":
            break
        case "collapseStart":
        case "fullscreenCollapseStart":
            break
        case "collapseFinish":
        case "fullscreenCollapseFinish":
            returnTiles( )
            break
        default:
            handleCustomSignal( inSignal )
            break
    }
}

function handleCustomSignal( inSignal ) {
    try
    {
        if ( inSignal.target.id == "gwd-taparea_menu" ) {
            returnTiles( )
            $( "#gwd-taparea_menu" ).hide( )
            return
        }
        var index = inSignal.currentTarget.attributes[ "data" ].value
        var a = $( ".cardWrapper" ).slice( 0 );
        a.splice( index - 1, 1 );
        document.getElementById( 'engaged' ).style.pointerEvents = "none"
        animateOut( a, inSignal.currentTarget, index )
    }
    catch ( e ) {}
}

function initCards( ) {
    TweenMax.set( ".card", {
        transformStyle: "preserve-3d"
    } );
    TweenMax.set( ".back", {
        rotationY: -180
    } );
    TweenMax.set( [ ".back", ".front" ], {
        backfaceVisibility: "hidden"
    } );
    TweenMax.set( ".cardWrapper", {
        perspective: 800
    } );
    TweenMax.set( ".cardFace", {
        perspective: 800
    } );
    $( ".cardWrapper" ).hover( showBack, showFront );
    $( ".cardWrapper" ).click( handleCustomSignal );
    $( "#gwd-taparea_menu" ).click( handleCustomSignal );
}

function showBack( ) {
    var yy = $( this ).height( ) / 4
    TweenMax.to( $( this ).find( ".card" ), .4, {
        rotationY: 180,
        ease: Linear.easeOut,
        scale: 1,
        y: 0
    } );
    TweenMax.to( $( this ).find( ".card" ), .2, {
        scale: .5,
        y: yy,
        ease: Linear.easeOut,
        repeat: 1,
        yoyo: true
    } );
}

function showFront( ) {
    var yy = $( this ).height( ) / 4
    TweenMax.to( $( this ).find( ".card" ), .4, {
        rotationY: 0,
        scale: 1,
        y: 0,
        ease: Linear.easeOut
    } );
}

function animateIn( ) {
    TweenMax.staggerFrom( $( ".cardWrapper" ), 1, {
        alpha: 0,
        scale: 0,
        ease: Strong.easeInOut,
    }, .1 );
}

function returnTiles( ) {
    document.getElementById( 'engaged' ).style.display = "block"
    document.getElementById( 'engaged' ).style.pointerEvents = "auto"
    $( "#gwd-taparea_menu" ).hide( )
    $( "#myContent" ).hide( )
    TweenMax.staggerTo( $( ".cardWrapper" ), .4, {
        alpha: 1,
        scale: 1,
    } )
}

function hideTiles( inFrame ) {
    var myContentDelay = 1.5
    var myMenuButtonDelay = 2.2
    if ( inFrame == lastClicked )
    {
        myContentDelay = myMenuButtonDelay = 0
    }
    document.getElementById( 'engaged' ).style.display = "none"
    document.getElementById( 'myContent' ).style.display = "block"
    $( "#gwd-taparea_menu" ).show( )
    TweenMax.from( $( "#gwd-taparea_menu" ), .4, {
        alpha: 0,
        delay: myMenuButtonDelay
    } )
    myGallery.goToFrame( inFrame );
    myContent.goToFrame( inFrame );
    $( "#myContent" ).show( )
    TweenMax.from( myContent, .6, {
        alpha: 0,
        y: 400,
        delay: myContentDelay,
        ease: Strong.easeInOut,
        onComplete: rememberIndex,
        onCompleteParams: [ inFrame ]
    } )
}

function rememberIndex( index )
{
    lastClicked = index
}

function animateOut( a, b, c ) {
    TweenMax.staggerTo( a, 1, {
        alpha: 0,
        scale: 0,
        ease: Back.easeInOut,
    }, .1 );
    TweenMax.to( b, .4, {
        alpha: 0,
        scale: 4,
        ease: Strong.easeInOut,
        delay: 1.2,
        onComplete: hideTiles,
        onCompleteParams: [ c ]
    } );
}
