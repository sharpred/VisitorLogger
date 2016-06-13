var helpers = require("helpers"),
    moment = require("alloy/moment"),
    activeButton;

function report(e) {
    if(activeButton) {
            activeButton.text = "  " + moment(e.value).format("hh:mm");
    }

}

function cleanUp(){
    $.destroy();
}
$.dateField.text = "Date: " + moment().format("DD/MM/YY");

$.arrivalTime.addEventListener('click', function() {
    activeButton = $.arrivalTime;
    $.pickerView.animate(slide_in);
});

$.departureTime.addEventListener('click', function() {
    activeButton = $.departureTime;
    $.pickerView.animate(slide_in);
});

var slide_in = Titanium.UI.createAnimation({
    bottom : 0
});

var slide_out = Titanium.UI.createAnimation({
    bottom : -276
});

$.bb1.addEventListener("click", function() {
    $.pickerView.animate(slide_out);
    activeButton = null;
});

$.btn.addEventListener("click", function() {
    helpers.shareViewImage($.container, "Print Me");
});
$.container.open();
