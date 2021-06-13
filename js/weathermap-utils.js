// mapboxCoordinates()
function mapboxCoordinates (coordinates) {

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_MAP_TOKEN,
            // lat: 25.7617,
            lat: coordinates[1], //second value in array
            // lon: -80.1918,
            lon: coordinates[0], //first value in array
            units: "imperial",
        },
        success: function (data) {
            console.log('5 day forecast', data);
            //new function to pass to conjoin data into object
        }
    });

}

