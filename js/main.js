// Trun katalog
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
//Map
function initMap() {
    let options = {
        zoom: 14,
        center: {
            lat: 43.799761,
            lng: 19.002105
        },
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    let map = new google.maps.Map(document.getElementById('map'), options);

    function addMarker(coords) {
        let marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: '../img/marker.png'
        })
    }
    addMarker({
        lat: 43.797138,
        lng: 19.004414
    });
    addMarker({
        lat: 43.801279,
        lng: 19.006433
    });
    addMarker({
        lat: 43.800653,
        lng: 19.001577
    });
    addMarker({
        lat: 43.803665,
        lng: 19.001037
    });
    // Vrh grada
    addMarker({
        lat: 43.811289,
        lng: 18.999357
    });
    addMarker({
        lat: 43.795849,
        lng: 19.009381
    });
    addMarker({
        lat: 43.887829,
        lng: 19.109191
    })
};