var args = arguments[0] || {},
    moment = require("alloy/moment");
Alloy.Collections.visitors.fetch();
function doTransform(model) {
    "use strict";
    var transform = {};
    if (model) {
        transform = model.toJSON();
    }
    console.log(transform);
    transform.canEdit = true;
    transform.selectionStyle = OS_IOS ? Ti.UI.iPhone.ListViewCellSelectionStyle.NONE : null;
    return transform;
}

function updateUi() {
    "use strict";
    console.log("updateUi");
    Alloy.Collections.visitors.fetch();
    updateListViewUi();
}

function deleteItem(e) {
    "use strict";
    var section,
        item,
        model,
        length;
    e = e || {};
    length = $.lv.sections[e.sectionIndex].items.length;
    section = $.lv.sections[e.sectionIndex];
    item = section.getItemAt(e.itemIndex);
    console.log(item);
    if (item && item.uuid && item.uuid.text) {
        console.log(JSON.stringify(item.uuid.text));
        model = Alloy.Collections.visitors.getByUuid(item.uuid.text);
        if (model) {
            console.log(JSON.stringify(model));
            Alloy.Collections.visitors.remove(model);
            model.destroy();
            updateUi();
        } else {
            console.error("cannot delete model");
        }
    } else {
        console.error("no item");
    }
}

function filterFunction(collection) {
    return collection.getCurrentItems();
}

function updateItem(e) {
    "use strict";
    var section,
        item,
        model,
        length;
    e = e || {};
    length = $.lv.sections[e.sectionIndex].items.length;
    section = $.lv.sections[e.sectionIndex];
    item = section.getItemAt(e.itemIndex);
    if (item && item.uuid && item.uuid.text) {
        console.log(JSON.stringify(item.uuid.text));
        model = Alloy.Collections.visitors.getByUuid(item.uuid.text);
        if (model) {
            console.log(JSON.stringify(model));
            model.set({
                departureTime : moment().format("HH:mm")
            });
            model.save();
        } else {
            console.error("cannot delete model");
        }
        updateUi();
    }
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
