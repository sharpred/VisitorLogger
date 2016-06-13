/* exported report, onAdd, addSignature, cleanUp, eraseMe */
var helpers = require("helpers"),
    moment = require("alloy/moment"),
    activeButton,
    slide_in,
    slide_out;

function userCancelled(e) {
    "use strict";
    console.log("**** userCancelled: " + JSON.stringify(e));
}

function accessDenied(e) {
    "use strict";
    console.log("**** accessDenied: " + JSON.stringify(e));
    //TODO confirm text / handle this better / check media perms etc
    //console.log(JSON.stringify(e));
    $.permissionDeniedDialog.show();
}

function report(e) {
    if (activeButton) {
        activeButton.text = "  " + moment(e.value).format("HH:mm");
        activeButton.color = "black";
    }

}

function shareData() {
    helpers.shareViewImage($.container, "Print Me");
}

function saveData() {
    console.log("**** save data");
}

function savePhoto(e) {
    console.log("*** savePhoto");
    if (e.media) {
        $.photoImage.top = 20;
        $.photoImage.height = 100;
        $.photoImage.image = e.media;
        $.photoButton.height = 0;
        $.photoButton.visible = false;
        $.photoButton.top = 0;
    }
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

function onAdd() {
    Ti.Media.requestCameraPermissions(function(e) {//jshint ignore:line
        //console.log(JSON.stringify(e));
        addPhoto();
    });
}

function addSignature() {
    $.signatureView.visible = true;
    activeButton = $.arrivalTime;
    $.signatureView.animate(slide_in);
}

function cleanUp() {
    $.destroy();
}

function eraseMe() {
    $.paint.clear();
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

slide_in = Titanium.UI.createAnimation({
    bottom : 0
});

slide_out = Titanium.UI.createAnimation({
    bottom : -276
});

$.bb1.addEventListener("click", function() {
    $.pickerView.animate(slide_out);
    $.pickerView.visible = false;
    activeButton = null;
});

$.bb2.addEventListener("click", function(e) {
    //alert(JSON.stringify($.sigBox));
    var img;
    switch(e.index) {
    //erase
    case 0:
        $.paint.clear();
        break;
    //cancel
    case 1:
        $.signatureView.animate(slide_out);
        $.signatureView.visible = false;
        break;
    //done
    case 2:
        img = $.paint.toImage();
        $.signatureImage.top = 20;
        $.signatureImage.height = 100;
        $.signatureImage.image = img;
        $.signatureButton.height = 0;
        $.signatureButton.visible = false;
        $.signatureButton.top = 0;
        $.signatureView.animate(slide_out);
        $.signatureView.visible = false;
        break;
    default:
        //there is no default;
        break;
    }
});

$.container.open();
