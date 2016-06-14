var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

if (args.isFirst) {
    $.back.disabled = false;
}

if (args.nextAction && _.isFunction(args.nextAction)) {
    $.done.addEventListener("click", args.nextAction);
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
