var args = arguments[0] || {};
Alloy.Collections.visitors.fetch();
function doTransform(model) {
    "use strict";
    var transform = model.toJSON();
    transform.canEdit = true;
    transform.selectionStyle = OS_IOS ? Ti.UI.iPhone.ListViewCellSelectionStyle.NONE : null;
    return transform;
}

function deleteItem(e){
    console.log("**delete");
    console.log(JSON.stringify(e));
}

function updateItem(e){
    console.log("**update");
    console.log(JSON.stringify(e));
}
$.lv.addEventListener("editaction", function(e) {
    "use strict";
    switch(e.action) {
    case "DELETE":
        deleteItem(e);
        break;
    case "DEPART":
        updateItem(e);
        break;
    default:
        console.log("editactions: " + JSON.stringify(e));
        break;
    }
});
