Cube  = require '../../shared/util/Cube.js'

self.addEventListener('message', (e) ->
    cubes = e.data
    for z in [0...30] # increase complexity
        for y in [0...300]
            cubes[0].slice('campaignId')

    self.postMessage("Success!")
    self.close()
, false) 
