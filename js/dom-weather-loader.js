function toTheMoon(data) {


    $('#forecast').empty()
        //empty clears previous
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * -14400)
    nd = new Date(atlanta)
// console.log(nd)


    data.forEach(function (obj) {


        $('#forecast').append(functionForCards(obj))
    })
}


function functionForCards(data) {
    let paddy = $(`<div class="card"></div>`);

    // new Date(dt * 1000)
// // Will display time in 10:30:23 format
//     let unix_timestamp = data.date
//     console.log(unix_timestamp)
// // Create a new JavaScript Date object based on the timestamp
// // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//     var date = new Date(unix_timestamp * 1000);
// // Hours part from the timestamp
//     var hours = date.getHours();
// // Minutes part from the timestamp
//     var minutes = "0" + date.getMinutes();
// // Seconds part from the timestamp
//     var seconds = "0" + date.getSeconds();
//     var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//     console.log(formattedTime)

    var sec = data.date;
    console.log(sec)
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();

    console.log(date, timestr);

    paddy.append(
        `<div>
<div class="date">${data.date}		            <img src="http://openweathermap.org/img/w/${data.icon}.png"/><br>
</div>
<hr>
		<div class="temperature">Temperature: ${data.temperature} F</div>
		<hr>
			<div class="description">${data.description}</div>
		<hr>
		<div class="humidity">Humidity: ${data.humidity}</div>
			<hr>
	
			<div class="countryCode">Country Code: ${data.country}</div>
	</div>`
    )
    return paddy
}
// cityHeader()
// function cityHeader(data){
//     var name = data.name
//         name.append(
//             `<div class="navbar">Good Morning: ${name}</div>`
//     )
// };


// if (i % 8 === 0) {
//     console.log(data.list[i].dt_txt,)
//     console.log(obj)
//
// }
// let paddyWagon = `
//                         //             <div>
//                         //                 <div class >${product.title}</td>
//                         //                 <div class >${product.quantity}</td>
//                         //                 <div class >${product.categories}</td>
//                         //                 <div class >${product.price}</td>
//                         //             </div> `
//                 $("#insertProducts").append(paddyWagon)

// return obj;
// }

