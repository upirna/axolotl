module.exports =
    
    enableStickyHeader: (stickyHeaderTable) ->
        scroll                = null
        initialStickyOffset   = null
        initialWindowHeight   = null
        initialDocumentHeight = null
        stickyApplied         = no

        render = ->
            initialStickyOffset   = stickyHeaderTable.offset().top unless initialStickyOffset?
            initialWindowHeight   = $(window).height()+500         unless initialWindowHeight?
            initialDocumentHeight = $(document).height()           unless initialDocumentHeight?

            if initialStickyOffset?
                # if the list is only slightly longer, we do not stick header
                if initialWindowHeight > initialDocumentHeight
                    handleStickyDestroy()
                    return

                shouldStick = window.scrollY > initialStickyOffset
                
                if shouldStick and not stickyApplied
                    stickyHeaderTable.addClass 'sticky-header'
                    stickyHeaderTable.trigger  'stickyHeaderOn'
                    stickyApplied = yes

                else if not shouldStick and stickyApplied
                    stickyHeaderTable.removeClass 'sticky-header'
                    stickyHeaderTable.trigger     'stickyHeaderOff'
                    stickyApplied = no

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