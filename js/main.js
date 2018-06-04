$(document).ready(function () {
    $("#flipbook").turn({
        width: 1200,
        height: 1000,
        gradients: true,
        pages: 4,
        acceleration: true,
    });
    $(window).bind('keydown', function (e) {
        if (e.keyCode == 37)
            $('#flipbook').turn('previous');
        else if (e.keyCode == 39)
            $('#flipbook').turn('next');
    });
});