var args = arguments[0] || {};
Alloy.Collections.visitors.fetch();
function doTransform(model) {
    "use strict";
    var transform = model.toJSON();
    transform.canEdit = true;
    transform.selectionStyle = OS_IOS ? Ti.UI.iPhone.ListViewCellSelectionStyle.NONE : null;
    return transform;
}
