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



        handleStickyScroll = ->
            console.log 'test'
            s = 0
            i = 0
            while (i < 10000)
                i++
                y = 0
                while (y < 2000)
                    y++
                    s += y+1
                    


            render()

        handleStickyDestroy = ->
            $(window).unbind 'scroll', handleStickyScroll

        $(window).on 'scroll', handleStickyScroll
        @bind 'destroy', handleStickyDestroy, @