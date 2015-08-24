
module.exports = ->
    
    # Restricts number values to the given closed interval
    Number::clamp = (min = -Infinity, max = Infinity) ->
        Math.max min, Math.min(max, @)


