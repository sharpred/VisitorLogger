var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

var send = Titanium.UI.createButton({
    title : 'Next',
    style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
});

var back = Titanium.UI.createButton({
    title : 'Back',
    style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
});

var cancel = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
});

var flexSpace = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var buttons = [cancel, flexSpace, back, flexSpace, send];

if (args.isFirst) {
    buttons = [cancel, flexSpace, send];
}
$.txt.keyboardToolbar = buttons;

$.setValue = function(val) {
    $.txt.value = val;
};

$.getValue = function() {
    return $.txt.value;
};

function cancel() {
    $.txt.blur();
}
