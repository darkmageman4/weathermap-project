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

$(document).ready(function () {
    function getCityWeather(cityCoordinates) {
        $.get("https://api.darksky.net/forecast/67b712ca42b8a1c502ad5da0ab0c40e3/"+ cityCoordinates + "?exclude=minutely,hourly,daily,alerts,flags", function(jsonData){
            console.log(jsonData.currently);
            $("#location").text(JSON.stringify(jsonData.currently));
        }, "jsonp");
    }

    function getWeather(){
        $.getJSON("httpcs://ipapi.co/json/", function(jsonData){
            // console.log(jsonData);
            var cityCoordinates = jsonData.latitude +","+ jsonData.longitude;
            // console.log(cityCoordinates);
            getCityWeather(cityCoordinates);
        });
    }
    getWeather();
});
mapboxgl.accessToken = token;












//
// var map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/outdoors-v11",
//     center: [-80.1918, 25.7617],
//     zoom: 11,
// })
//
// //call function to give method and initial pointer
// let marker = setMarker(
//     //[-80.1918, 25.7617]);
// //  Boobs
//     [-80.24007381597617, 26.155512538141295]
// )
//
// // call addMapEvent after marker has been initially set
// addMapEvent(marker)
//
// //create new geocoder
// let geocoder = setGeoCoder();
// addGeocoderToMap(geocoder)
// addGeocoderEvent(event)
//
// // setPopUp()
//
// function setGeoCoder() {
//     return new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//         marker: false
//     })
// };
//
// //add geocoder
// function addGeocoderToMap(geocoder) {
//     map.addControl(geocoder);
// }
//
// function addGeocoderEvent() {
//     geocoder.on("result", function (event) {
//         marker(event.result.geometry.coordinates).setLngLat(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name));
//     })
// }
//
// // creates marker
// function setMarker(point) {
//     return new mapboxgl.Marker().setLngLat(point).addTo(map);
// }
//
// // add event to map that changes location based on user click
// function addMapEvent() {
//     map.on("click", function (e) {
//         // console.log(e.lngLat)
//         marker.setLngLat(e.lngLat).addTo(map);
//     })
// }
// function addGeocoderEvent() {
//     geocoder.on("result", function (event) {
//         console.log(event);
//         // marker.setLngLat(event.result.geometry.coordinates)
//         setMarker(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name));
//
//     })
// }
//
// function setPopUp(textDetails) {
//     let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
//         .addTo(map);
//     marker.setPopup(popup);
// }
//
// function getPopup(textDetails) {
//     return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
// }
//
// $(document).ready(function () {
//     function getCityWeather(cityCoordinates) {
//         $.get("https://api.darksky.net/forecast/67b712ca42b8a1c502ad5da0ab0c40e3/"+ cityCoordinates + "?exclude=minutely,hourly,daily,alerts,flags", function(jsonData){
//             console.log(jsonData.currently);
//             $("#location").text(JSON.stringify(jsonData.currently));
//         }, "jsonp");
//     }
//
// function getWeather(){
//     $.getJSON("httpcs://ipapi.co/json/", function(jsonData){
//         // console.log(jsonData);
//         var cityCoordinates = jsonData.latitude +","+ jsonData.longitude;
//         // console.log(cityCoordinates);
//         getCityWeather(cityCoordinates);
//     });
// }
// getWeather();
// });
