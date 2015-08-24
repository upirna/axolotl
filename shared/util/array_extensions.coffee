module.exports = ->
    Array::first     = -> @[0]
    Array::second    = -> @[1]
    Array::last      = -> @slice(-1).first()
    Array::intersect = (array) -> @filter (item) -> item in array
    Array::diff      = (array) -> @filter (item) -> item not in array
    Array::with      = (items) ->
        items = [items] unless items instanceof Array
        result = @slice 0
        result.push item for item in items.filter((item) -> item not in @)
        result
    Array::without   = (items) ->
        items = [items] unless items instanceof Array
        @filter (item) -> item not in items
    Array::put       = (items) ->
        items = [items] unless items instanceof Array
        @push item for item in items.diff(@)
        @
    Array::pluck     = (key) -> @map (item) -> item[key]
    Array::unique    =       ->
        @reduce(
            (u, v) ->
                u.push(v) unless v in u
                u
            []
        )
    Array::max       = -> Math.max.apply null, @
    Array::min       = -> Math.min.apply null, @
    Array::sum       = -> @reduce ((a, e) -> a + e), 0
    Array::contains  = (x) -> @indexOf(x) != -1
    Array::clone     = -> @slice(0)
    Array::exists    = (p) -> @filter(p).length > 0
    Array::every     = (p) -> @filter(p).length == @length
    Array::subsetOf  = (xs) -> @diff(xs).length == 0
