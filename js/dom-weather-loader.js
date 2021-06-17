function toTheMoon(data) {
    data.forEach(function (obj) {
        $('#forecast').append(functionForCards(obj))
    })
}

function functionForCards(data) {
    let paddy = $(`<div class="card"></div>`);

    var sec = data.date;
    console.log(sec)
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    console.log(date, timestr);

    paddy.append(
        `<div>
<div class="date">${data.date}<img src="http://openweathermap.org/img/w/${data.icon}.png" /><br></div>
<hr><div class="temperature">Temperature: ${data.temperature} F</div><hr><div class="description">${data.description}</div>
		<hr><div class="humidity">Humidity: ${data.humidity}</div>
			<hr><div class="countryCode">Country Code: ${data.country}</div>
	</div>`
    )
    return paddy
}