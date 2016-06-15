var args = arguments[0] || {};
Alloy.Collections.visitors.fetch();
function doTransform(model) {
    "use strict";
    var transform = model.toJSON();
    return transform;
}
