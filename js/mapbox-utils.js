mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-80.1918, 25.7617],
    zoom: 11,
})

//create new geocoder

let geocoder = setGeoCoder();
function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false //reset marker
    })
};

// inputBox(geocoder) //function for functionally inputBox
//add geocoder
// function inputBox(geocoder) {
//     map.addControl(geocoder);//add geocoder to map
// }

resultsFromGeocoder(event)
function resultsFromGeocoder() {
    map.addControl(geocoder);//add geocoder to map
    geocoder.on("result", function (event) { // comes in event array
        console.log(event)
        console.log(event.result.place_name)
        console.log(event.result.geometry.coordinates[1]) //lat
        console.log(event.result.geometry.coordinates[0]) //long
      // let coordinates = event.results.geometry.coordinates
           marker.setLngLat(event.result.geometry.coordinates).setPopup(createsPopup(event.result.place_name));
        // console.log(marker)
        // console.log(coordinates)
        mapboxCoordinates(event.result.geometry.coordinates)// this will send coordinates to weathermap-utils
    })
}


//should I name coordinate variable
// function geoCoderEventOnResult (geoCoderResult) {
//     geoCoderResult.on('result',function (data){
//         let coordinates = data.result.geometry.coordinates
//         marker.setLngLat(coordinates)
//             .addTo(map);
//         weatherMapUtils(coordinates);
//     })
// }

//call function to give method and initial pointer (Miami)
let marker = markerCreator([-80.24007381597617, 26.155512538141295])

// creates marker
function markerCreator(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

// call clickFunction after marker has been initially set
whatHappensWhenMapIsClicked(marker)
// add event to map that changes location based on user click
function whatHappensWhenMapIsClicked() {
    map.on("click", function (e) {
        console.log(e.lngLat)
        marker.setLngLat(e.lngLat).addTo(map);
    })
}

function createsPopup(textDetails) {
    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}


///////                 Below original fixed code             !!!!!!!!!!!


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

// (function () {


/////  Do Not Need   ????????

// setPopUp()
// function setPopUp(textDetails) {
//     let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`)
//         .addTo(map);
//     marker.setPopup(popup);
// }