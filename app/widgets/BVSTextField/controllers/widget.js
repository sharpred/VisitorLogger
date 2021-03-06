var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

if (args.isFirst) {
    $.back.enabled = false;
}

$.txt.addEventListener("blur", function() {
    if ($.txt.value === "") {
        $.txt.borderColor = "red";
    } else {
        $.txt.borderColor = "#c5c5c7";
    }
    Alloy.Globals.Dispatcher.trigger("BVSTextField:update");
});

$.setNextAction = function(func) {
    $.done.addEventListener("click", func);
};

$.setBackAction = function(func) {
    $.back.addEventListener("click", func);
};

$.focus = function() {
    $.txt.focus();
};

$.blur = function() {
    $.txt.blur();
};

$.setValue = function(val) {
    if (val) {
        $.txt.value = val;
    }

};

$.getValue = function() {
    return $.txt.value;
};

$.isNotEmpty = function() {
    var test = false;
    if ($.txt.value !== "") {
        return true;
    }
};

$.getID = function() {
    return args.id;
};

$.reset = function() {
    $.txt.value = "";
    $.txt.borderColor = "#c5c5c7";
};

function cancel() {
    $.txt.blur();
}
