BaseView   = require './base.coffee'

class DefaultLayoutView extends BaseView
    
    id           : 'big-daddy'
    templateName : 'default-layout'
    
    pageView : null
    
    constructor: (options) ->
        super

        $(document).bind 'click', (e) =>
            @trigger 'click:document', e

        $(document).bind 'keyup', (e) =>
            @trigger('keypress:escape', e) if e.keyCode is 27

    disablePageLoader: ->
        @viewStack.toggleClass 'loading', false
        @setLoadingMessage 'Please wait...'
    
    enablePageLoader: (message = 'Please wait...') ->
        enable = =>
            if not @pageView?
                @viewStack.toggleClass 'loading', true
                @setLoadingMessage message
            else
                setTimeout enable, 100
        
        enable()
    
    setLoadingMessage: (message) ->
        @$el.find('.loading-message').text message

    showPage: (view, cb, effect = 'fade-in') ->
        fadeInPage = =>
            if not @pageView?
                @pageView = view
                @pageView.render()
                @disablePageLoader()
                @pageView.$el.one('webkitTransitionEnd transitionend', cb)
                        .appendTo(@viewStack)
                        .addClass effect
            else
                setTimeout fadeInPage, 100
        
        fadeInPage()
    
    hidePage: ->
        $body = $ 'body'
        if $body.scrollTop() > 0
            @viewStack.css(visibility: 'hidden').find('.coverflow > div').hide()
            $body.scrollTop(@viewStack.offset().top)
                .animate { scrollTop: 0, easing: 'easein' }, 500, =>
                    @viewStack.css visibility: 'visible'
                    @pageView?.destroy()
                    @pageView = null
        else
            @pageView?.destroy()
            @pageView = null

    destroy: ->
        @accountStyle.remove()
        super

    render: ->
        super
        
        $('#loading,#loading-mask').fadeOut().queue ->
            $(@).add('noscript,body>script').remove()
        
        @viewStack = @$('#view-stack')
        
        @viewStack.find('> *:not(.loading-screen)').remove()
        @viewStack.toggleClass 'loading', yes
        
        @setLoadingMessage 'Please wait...'
        
        $('html').removeClass('ac3 ac4').addClass 'ac3'
        $('body').append @$el
        $('head').append @accountStyle
        
module.exports = DefaultLayoutView