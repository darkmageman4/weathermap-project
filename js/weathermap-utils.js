// function domdata(data) {
//
//     let arr = [];
//
//     for(let i = 0; i < data.list.length; i++){
//
//         if(i % 8 === 0){
//             arr.push(data.list[i]);
//         }
//     }
//     return arr;
// }




function weatherMapUtils(coordinates) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_MAP_TOKEN,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial",

        },
        success: function (data) {

            toTheMoon(myLoopFunction(data))
        }
    });
}


// // 1.loop own function
// // 2. dom own function passing data into it
// // 3. working function : function container

function myLoopFunction(data) {
    console.log(data)
    let obj = [];
    for (let i = 0; i < data.list.length; i++) {



        // function domdata(data) {
//
//     let arr = [];
//
//     for(let i = 0; i < data.list.length; i++){
//
//         if(i % 8 === 0){
//             arr.push(data.list[i]);
//         }
//     }
//     return arr;
// }



        if (i % 8 === 0) {




            obj.push({
                country: data.city.country,
                //for county two letters
                date: data.list[i].dt,
                //pulls long dat that needs to be multipled by 1000
                DTG: data.list[i].dt_txt,
                // pulls DTG
                description: data.list[i].weather[0].description,
                //for description
                temperature: data.list[i].main.temp,
                // for temperature
                humidity: data.list[i].main.humidity,
                //for humidity
                name: data.city.name,
                //for name
                icon: data.list[i].weather[0].icon,
                // icon next to DTG


                /// have to able to fit into this
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

            })
        }
    }


    return obj
}
