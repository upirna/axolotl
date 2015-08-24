module.exports =
    meh: ->
    noop: ->
    stfu: (e) ->
        e.preventDefault()
    gtfo: (e) ->
        e.preventDefault()
        e.stopPropagation()
