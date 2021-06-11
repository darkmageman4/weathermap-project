const token = "pk.eyJ1IjoiZGFya21hZ2VtYW40IiwiYSI6ImNrcHBtdzM2OTAya3oycXB0NjUyd2FwbGQifQ.ZxkFur5nI3aJZ19VNyDMFA"

mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-80.1918, 25.7617],
    //[-80.1918, 25.7617],
    zoom: 11,
})

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        // APPID: OPEN_WEATHER_MAP_TOKEN,
        // lat:    29.423017,
        // lon:   -98.48527,
        // units: "imperial",
    },
    success: function (data){
        console.log(data)
    }
});