$ = require 'jquery'

module.exports =
    
    enableStickyHeader: (head, body) ->
        scroll                = null
        initialStickyOffset   = null
        initialWindowHeight   = null
        initialDocumentHeight = null
        stickyApplied         = no
        
        headerClone = $(head.clone())
        headerClone.attr("id", "campaigns-table-head-clone")
        headerClone.addClass('sticky-header')
        head.parent().append headerClone

        render = ->
            headerBox = head[0].getBoundingClientRect()
            bodyBox   = body[0].getBoundingClientRect()

            initialStickyOffset   = head.offset().top unless initialStickyOffset?
            initialWindowHeight   = $(window).height()+500         unless initialWindowHeight?
            initialDocumentHeight = $(document).height()           unless initialDocumentHeight?

            if initialStickyOffset?
                # if the list is only slightly longer, we do not stick header
                if initialWindowHeight > initialDocumentHeight
                    handleStickyDestroy()
                    return

                shouldStick = window.scrollY > initialStickyOffset
                
                if shouldStick and not stickyApplied
                    headerClone.addClass 'show-sticky-header'
                    head.trigger  'stickyHeaderOn'
                    stickyApplied = yes

                else if not shouldStick and stickyApplied
                    headerClone.removeClass 'show-sticky-header'
                    head.trigger     'stickyHeaderOff'
                    stickyApplied = no

            if stickyApplied
                headerClone.css 'margin-left', -body[0].offsetLeft + bodyBox.left
            else
                headerClone.css 'margin-left', 'auto'


        debounce = (func, threshold) ->
            timeout = undefined
            
            debounced = ->
                delayed = ->
                    timeout = null
                
                func.apply this
                
                timeout = setTimeout(delayed, threshold)

        handleStickyScroll = ->
            debounce render(), 40

        handleStickyDestroy = ->
            $(window).unbind 'scroll', handleStickyScroll

        $(window).on 'scroll', handleStickyScroll
        @bind 'destroy', handleStickyDestroy, @