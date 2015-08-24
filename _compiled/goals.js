var constants = [
   {
      "id"    : "acquisition",
      "label" : "Acquisition"
   },
   {
      "id"    : "awareness",
      "label" : "Awareness"
   },
   {
      "id"    : "branding",
      "label" : "Branding"
   },
   {
      "id"    : "directResponse",
      "label" : "Direct Response"
   },
   {
      "id"    : "driveSales",
      "label" : "Drive Sales"
   },
   {
      "id"    : "driveTraffic",
      "label" : "Drive Traffic"
   },
   {
      "id"    : "engagement",
      "label" : "Engagement"
   },
   {
      "id"    : "leadGeneration",
      "label" : "Lead Generation"
   },
   {
      "id"    : "other",
      "label" : "Other"
   }
];

Object.keys(constants).forEach(function(key) {
    function ucfirst(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    
    constants['get'+ucfirst(key).slice(0, -1)+'ById'] = function(id, nullOk) {
        var collection = constants[key];
        for (var i = 0; i < collection.length; i++) {
            var elem = collection[i];
            if (elem.id === id)
                return elem;
        }
        
        if (nullOk)
            return null;
        else
            throw new Error("constants."+key+" does not contain an element with id '"+id+"'");
    };
});

constants.getExpandableFormats = function() {
    return constants.formats.filter(function(format) {
        return format.units.exists(function(unit) { return unit.expandable; });
    });
};

// only do this for constants.json
if (constants.metrics && constants.metrics.length > 0) {
    var parse = require('esprima').parse;

    constants.metrics.filter(function(m) { return m.computed; }).forEach(function(m) {
        m.ast = parse(m.formula).body[0].expression;
    });
}

module.exports = constants;