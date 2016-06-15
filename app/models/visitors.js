var helpers = require("helpers");
exports.definition = {
    config : {

        adapter : {
            type : "properties",
            collection_name : "visitors"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
            validate : function(args) {
                var test,
                    keys = ["id", "nameField", "arrivalTime", "car", "creationDate", "departureTime", "orgn", "uuid", "visiting"];
                test = helpers.hasKeys(args, keys);
                //console.log(args);
                if (!test) {
                    return "doh!";
                }

            }
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here

            // For Backbone v1.1.2, uncomment the following to override the
            // fetch method to account for a breaking change in Backbone.
            /*
            fetch: function(options) {
            options = options ? _.clone(options) : {};
            options.reset = true;
            return Backbone.Collection.prototype.fetch.call(this, options);
            }
            */
            //note the negative to get reverse order - newest at top!
            comparator : function(item) {
                var moment = require("alloy/moment");
                var dt = moment(item.get("creationDate")).valueOf();
                return -dt;
            },
            getByUuid : function(uuid) {
                var data = this.where({
                uuid : uuid
                })[0];
                return data;
            },
            getCurrentItems : function() {
                return this.filter(function(item) {
                    var js = item.toJSON();
                    return js.departureTime === "  Time Out";
                });
            }
        });

        return Collection;
    }
};
