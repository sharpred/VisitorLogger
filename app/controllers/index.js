var args = arguments[0] || {};

function newRegistration() {
    var win = Alloy.createController('entryForm').getView();
    $.win1.openWindow(win);
}

function signOut() {
    var win = Alloy.createController('list').getView();
    $.win1.openWindow(win);
}

function showAll() {
    var win = Alloy.createController('list2').getView();
    $.win1.openWindow(win);
}

$.win1.open();