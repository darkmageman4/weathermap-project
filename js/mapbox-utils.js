mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-80.1918, 25.7617],
    zoom: 11,
})

let geocoder = setGeoCoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(event)

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
};

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent() {
    geocoder.on("result", function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
    })
}

// creates marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// add event to map that changes location based on user click
function addMapEvent() {
    map.on("click", function (e) {
        console.log(e.lngLat)
        marker.setLngLat(e.lngLat).addTo(map);
    })
}


