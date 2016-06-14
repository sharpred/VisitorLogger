var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

$.setValue = function(val) {
    $.txt.value = val;
};

$.getValue = function() {
    return $.txt.value;
};

function cancel() {
    $.txt.blur();
}
