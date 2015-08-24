var constants = [
    {
        "id": "art",
        "label": "Arts, Design & Fashion"
    },
    {
        "id": "auto",
        "label": "Automotive"
    },
    {
        "id": "edu",
        "label": "Education"
    },
    {
        "id": "ener",
        "label": "Energy & Utilities"
    },
    {
        "id": "entr",
        "label": "Entertainment & Media"
    },
    {
        "id": "cpg",
        "label": "Consumer Packaged Goods (CPG)"
    },
    {
        "id": "fin",
        "label": "Finance, Insurance & Real Estate"
    },
    {
        "id": "food",
        "label": "Food & Beverage"
    },
    {
        "id": "gov",
        "label": "Government"
    },
    {
        "id": "heal",
        "label": "Health & Sports"
    },
    {
        "id": "phar",
        "label": "Pharmaceutical"
    },
    {
        "id": "qsr",
        "label": "Quick Service Restaurants (QSR)"
    },
    {
        "id": "retail",
        "label": "Retail"
    },
    {
        "id": "logist",
        "label": "Shipping & Logistics"
    },
    {
        "id": "tech",
        "label": "Technology"
    },
    {
        "id": "tele",
        "label": "Telecommunications"
    },
    {
        "id": "trav",
        "label": "Travel & Hospitality"
    },
    {
        "id": "othr",
        "label": "Other"
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