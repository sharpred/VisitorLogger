var args = arguments[0] || {};

if (args.hintText) {
    $.txt.hintText = args.hintText;
}

if (args.isFirst) {
    $.back.enabled = false;
}

$.setNextAction = function(func){
    $.done.addEventListener("click", func);
};

$.setBackAction = function(func){
    $.back.addEventListener("click", func);
};

$.focus = function(){
    $.txt.focus();
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
