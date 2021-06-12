$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_MAP_TOKEN,
        lat: 25.7617,
        lon: -80.1918,
        units: "imperial",
    },
    success: function (data) {
        console.log('5 day forecast', data);
    }
});
