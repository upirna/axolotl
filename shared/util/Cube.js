var constants = require('../../_compiled/constants');
var evaluate  = require('static-eval');

var Cube = function(metrics, dimensions, facts)
{
    // Sparse, immutable, unoptimized.
    var self = this;
    
    // Properties
    self.metrics    = metrics;
    self.dimensions = dimensions;
    self.facts      = facts;
    
    // Calculate metric values
    var computedMetrics    = metrics.filter(function(m) { return constants.getMetricById(m).computed; });
    var nonComputedMetrics = metrics.filter(function(m) { return !constants.getMetricById(m).computed; });
    
    nonComputedMetrics.forEach(function(metric) {
        self[metric] = facts.reduce(function(acc, fact) {
            return acc + fact[metric];
        }, 0);
    });

    computedMetrics.forEach(function(metric) {
        var def   = constants.getMetricById(metric);
        var value = evaluate(def.ast, self);

        self[metric] = isNaN(value) ? 0 : value;
    });

    self.toString = function() {
        return '[Cube (metrics = [' + metrics.join(', ') + '], dimensions = [' + dimensions.join(', ') + '], #facts = ' + facts.length + ')]';
    };
};

//
// Splits the cube into multiple slices by a dimension.
//
// Usage:
//  cube.slices('date')   // {'2012-01-01': slice, '2012-01-05': slice, ...}
//
Cube.prototype.slices = function(dimension)
{
    if (this.dimensions.indexOf(dimension) == -1)
        throw 'Cube does not have the dimension: ' + dimension;
    
    // Group facts
    var slices = {};
    this.facts.forEach(function(fact) {
        var key = fact[dimension];
        if (!slices[key])
            slices[key] = [];
        slices[key].push(fact);
    });
    
    // Convert to cubes
    for (var key in slices)
        slices[key] = new Cube(this.metrics, this.sliceDimensions(dimension), slices[key]);
    
    return slices;
};

//
// Returns slices for a date dimension.
// 
// Same as slices(), but guaranteed to not produce any gaps.
//
Cube.prototype.dateSlices = function(dimension, min, max)
{
    var dateSlices = this.slices(dimension);
    var filteredSlices = {};
    
    var dates = Object.keys(dateSlices).sort();
    if (dates.length || min || max) {
        var first = +Date.fromApiDate(min || dates[0]);
        var last = +Date.fromApiDate(max || dates[dates.length-1]);
        for (var cur = first; cur <= last; cur += 24*60*60*1000) {
            var curDate = (new Date(cur)).toApiDate();
            if (!dateSlices[curDate])
                filteredSlices[curDate] = new Cube(this.metrics, this.sliceDimensions(dimension), []);
            else
                filteredSlices[curDate] = dateSlices[curDate];
        }
    }

    return filteredSlices;
};

//
// Returns a specific slice. Guaranteed to return a cube, even if no facts exist.
//
Cube.prototype.slice = function(dimension, value)
{
    var slice = this.slices(dimension)[value];
    if (slice) {
        return slice;
    } else {
        return new Cube(this.metrics, this.sliceDimensions(dimension), []);
    }
};

//
// Returns a new cube with the same dimensions and a subset of facts.
//
// Usage:
//  cube.filter(function(dimensionValues) callback)
//  cube.filter(dimension, value)
//  cube.filter(dimension, values)
//
Cube.prototype.filter = function() {
    var filter;
    if (arguments.length == 1) {
        filter = arguments[0]
    } else {
        var dimension = arguments[0];
        var value = arguments[1];
        
        if (value instanceof Array) {
            filter = function(dimensionValues) { return value.indexOf(dimensionValues[dimension]) !== -1; }
        } else {
            filter = function(dimensionValues) { return value === dimensionValues[dimension]; }
        }
    }
    
    return new Cube(this.metrics, this.dimensions, this.facts.filter(filter));
};

//
// Returns a cube with the same dimensions and subset of metrics
//
Cube.prototype.filterMetrics = function(newMetrics) {
    var newFacts = this.facts.filter(function(fact) {
        return newMetrics.filter(function(metric) {
            return fact[metric] > 0;
        }).length > 0;
    });

    return new Cube(newMetrics, this.dimensions, newFacts);
};

// Internal functions
Cube.prototype.sliceDimensions = function (cuttingBy) {
    return this.dimensions.filter(function(d) { return d != cuttingBy; });
};

module.exports = Cube;