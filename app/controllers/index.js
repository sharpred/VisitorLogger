var helpers = require("helpers"),
    moment = require("alloy/moment"),
    activeButton;

function report(e) {
    if (activeButton) {
        activeButton.text = "  " + moment(e.value).format("HH:mm");
        activeButton.color = "black";
    }

}

function onAdd() {
    Ti.Media.requestCameraPermissions(function(e) {//jshint ignore:line
        //console.log(JSON.stringify(e));
        addPhoto();
    });
}

function addPhoto() {
    var options = {
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
        success : savePhoto,
        error : accessDenied,
        cancel : userCancelled
    };
    if (Ti.Media.hasCameraPermissions()) {
        Ti.Media.showCamera(options);
    } else {
        accessDenied();
    }
}

function savePhoto(e) {
    console.log("*** savePhoto");
    if(e.media) {
        $.photoImage.top=20;
        $.photoImage.height=100;
        $.photoImage.image = e.media;
        $.photoButton.height=0;
        $.photoButton.visible=false;
        $.photoButton.top=0;
    }
}

function cleanUp() {
    $.destroy();
}

function accessDenied(e) {
    "use strict";
    console.log("**** accessDenied: " + JSON.stringify(e));
    //TODO confirm text / handle this better / check media perms etc
    //console.log(JSON.stringify(e));
    $.permissionDeniedDialog.show();
}

function userCancelled(e) {
    "use strict";
    console.log("**** userCancelled: " + JSON.stringify(e));
}

$.dateField.text = "Date: " + moment().format("DD/MM/YY");

$.arrivalTime.addEventListener('click', function() {
    $.pickerView.visible = true;
    activeButton = $.arrivalTime;
    $.pickerView.animate(slide_in);
});

$.departureTime.addEventListener('click', function() {
    $.pickerView.visible = true;
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
    $.pickerView.visible = false;
    activeButton = null;
});

$.btn.addEventListener("click", function() {
    helpers.shareViewImage($.container, "Print Me");
});
$.container.open();
