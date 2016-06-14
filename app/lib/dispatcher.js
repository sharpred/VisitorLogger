( function() {
        var _ = require("alloy/underscore");
        Alloy.Globals.Dispatcher = _.extend({}, _.clone(Backbone.Events));
    }());
