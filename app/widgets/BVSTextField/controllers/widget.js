var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

if (args.isFirst) {
    $.back.enabled = false;
}


$.setNextAction = function(func) {
    $.done.addEventListener("click", function() {
        if ($.txt.value === "") {
            $.txt.borderColor = "red";
        } else {
            $.txt.borderColor = "#c5c5c7";
        }
        func();
    });
};

$.setBackAction = function(func) {
    $.back.addEventListener("click", function() {
        if ($.txt.value === "") {
            $.txt.borderColor = "red";
        } else {
            $.txt.borderColor = "#c5c5c7";
        }
        func();
    });
};

$.focus = function() {
    $.txt.focus();
};

$.blur = function() {
    $.txt.blur();
};

$.setValue = function(val) {
    $.txt.value = val;
};

$.getValue = function() {
    return $.txt.value;
};

function cancel() {
    $.txt.blur();
}
