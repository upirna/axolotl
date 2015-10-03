module.exports =
    
    enableStickyHeader: (head, body) ->

        limit        = null
        enabled      = no
        rafRequestId = null

        cb = =>
            headerBox = head[0].getBoundingClientRect()
            bodyBox   = body[0].getBoundingClientRect()

            if not enabled
                if headerBox.top <= 0
                    body.css      'margin-top', headerBox.height
                    head.addClass 'sticky-header'
                        .trigger  'stickyHeaderOn'
                    enabled = yes
                    limit   = bodyBox.top - headerBox.top

                head.css 'margin-left', ''
            else
                if bodyBox.top > limit
                    body.css         'margin-top', 0
                    head.removeClass 'sticky-header'
                        .trigger     'stickyHeaderOff'
                    enabled = no
                    limit   = null

                head.css 'margin-left', -body[0].offsetLeft + bodyBox.left
            
            rafRequestId = window.requestAnimationFrame cb

        rafRequestId = window.requestAnimationFrame cb

        handleStickyDestroy = ->
            window.cancelAnimationFrame rafRequestId
            limit   = null
            enabled = no

        @bind 'destroy', handleStickyDestroy, @