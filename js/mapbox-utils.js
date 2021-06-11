mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-80.1918, 25.7617],
    zoom: 11,
})

//call function to give method and initial pointer
let marker = setMarker(
    //[-80.1918, 25.7617]);
//  Boobs
    [-80.24007381597617, 26.155512538141295]
)

// call addMapEvent after marker has been initially set
addMapEvent(marker)

//create new geocoder
let geocoder = setGeoCoder();
addGeocoderToMap(geocoder)
addGeocoderEvent(event)

// setPopUp()

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
};

//add geocoder
function addGeocoderToMap(geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent() {
    geocoder.on("result", function (event) {
        marker(event.result.geometry.coordinates).setLngLat(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name));
    })
}

// creates marker
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// add event to map that changes location based on user click
function addMapEvent() {
    map.on("click", function (e) {
        // console.log(e.lngLat)
        marker.setLngLat(e.lngLat).addTo(map);
    })
}

function setPopUp(textDetails) {
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
        .addTo(map);
    marker.setPopup(popup);
}

function getPopup(textDetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}

function addGeocoderEvent() {
    geocoder.on("result", function (event) {
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)
    })
}