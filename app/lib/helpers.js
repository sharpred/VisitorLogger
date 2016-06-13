exports.shareViewImage = function(view, title) {
    var img = view.toImage();
    require('com.alcoapps.socialshare').share({
        status : title,
        image : img,
        androidDialogTitle : title
    });
};
