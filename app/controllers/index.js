var template = _.template('<html><%- value %><button onclick="alert("Wo")";>Print</button></html>');
//$.wv.html = template({value: 'Hello Worldy'});

$.btn.addEventListener("click", function() {
    var img = $.container.toImage(),
        txt="print ID card";
    require('com.alcoapps.socialshare').share({
        status : txt,
        image : img,
        androidDialogTitle : txt
    });
});
$.container.open();
