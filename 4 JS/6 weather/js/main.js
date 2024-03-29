//* HTML Elements
let currentDay = document.getElementById("currentDay");
let currentDate = document.getElementById("currentDate");
let nextDay = document.getElementById("nextDay");
let nextNextDay = document.getElementById("nextNextDay");
let todayCard = document.getElementById("todayCard");
let nextDayCard = document.getElementById("nextDayCard");
let nextNextDayCard = document.getElementById("nextNextDayCard");



//* Variables
let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=17c8d9d4f5ab41e881a204517242803&days=3&q=';
let now = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayIndex = now.getDay();
let dayName = days[dayIndex];
let nextDayName = days[(dayIndex + 1) % days.length];
let nextNextDayName = days[(dayIndex + 2) % days.length];
let date = now.getDate();
let month = now.getMonth() + 1; // Months are zero-indexed, so add 1
let monthName;
let city = "";
let apiResponse;


//* functions 
async function getWeather() {
    let searchLocation = document.getElementById("location").value;
    if (searchLocation.length >= 3) {
        let data = await fetch(`${baseUrl}${searchLocation}`);
        apiResponse = await data.json();
        displayData();
    }
    else if (searchLocation.length == 0) {
        console.log(city);
        let data = await fetch(`${baseUrl}${city}`);
        apiResponse = await data.json();
        displayData();
    }
}

function getCurrentDate() {
    switch (month) {
        case 1:
            monthName = 'January';
            break;
        case 2:
            monthName = 'February';
            break;
        case 3:
            monthName = 'March';
            break;
        case 4:
            monthName = 'April';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'June';
            break;
        case 7:
            monthName = 'July';
            break;
        case 8:
            monthName = 'August';
            break;
        case 9:
            monthName = 'September';
            break;
        case 10:
            monthName = 'October';
            break;
        case 11:
            monthName = 'November';
            break;
        case 12:
            monthName = 'December';
            break;
    }

    currentDay.innerHTML = dayName;
    currentDate.innerHTML = (date < 10 ? '0' : '') + date + ' ' + monthName;
    nextDay.innerHTML = nextDayName;
    nextNextDay.innerHTML = nextNextDayName;
}

function displayData() {
    todayCard.innerHTML = `
                            <h6 id="cityName">${apiResponse.location.name}</h6>
                            <div class="temp my-2 d-flex justify-content-between align-items-center">
                                <div class="num">${apiResponse.forecast.forecastday[0].day.avgtemp_c} <sub>o</sub>C </div>
                                <img src="${apiResponse.forecast.forecastday[0].day.condition.icon}" alt="" width="90">
                            </div>
                            <div class="custom">${apiResponse.forecast.forecastday[0].day.condition.text}</div>
                            <div class="details d-flex gap-3 my-3">
                                <span><img src="https://routeweather.netlify.app/images/icon-umberella.png" alt=""> ${apiResponse.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                                <span><img src="https://routeweather.netlify.app/images/icon-wind.png" alt=""> ${apiResponse.forecast.forecastday[0].day.maxwind_kph}km/h</span>
                                <span><img src="https://routeweather.netlify.app/images/icon-compass.png" alt=""> East</span>
                            </div>
`;

    nextDayCard.innerHTML = `
                            <img src="${apiResponse.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
                            <div class="temp my-2">
                                <h2 class="text-white mx-auto">${apiResponse.forecast.forecastday[1].day.maxtemp_c} <sub>o</sub>C </h2>
                                <h6 class="mx-auto">${apiResponse.forecast.forecastday[1].day.mintemp_c}<sub>o</sub></h6>
                            </div>
                            <div class="custom">${apiResponse.forecast.forecastday[1].day.condition.text}</div>
    `;

    nextNextDayCard.innerHTML = `
                            <img src="${apiResponse.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
                            <div class="temp my-2">
                                <h2 class="text-white mx-auto">${apiResponse.forecast.forecastday[2].day.maxtemp_c} <sub>o</sub>C </h2>
                                <h6 class="mx-auto">${apiResponse.forecast.forecastday[2].day.mintemp_c}<sub>o</sub></h6>
                            </div>
                            <div class="custom">${apiResponse.forecast.forecastday[2].day.condition.text}</div>
    `;
}


function getUserCity() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCUjNy_6HHhU6qrc0zqyJj8kupck2IXST8`)
        .then(response => response.json())
        .then(data => {
            const addressComponents = data.results[0].address_components;
            for (let i = 0; i < addressComponents.length; i++) {
                const types = addressComponents[i].types;
                if (types.includes("locality")) {
                    city = addressComponents[2].long_name;
                    break;
                }
            }
            if (city == "") {
                city = "cairo";
            }    
        getWeather();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function errorCallback(error) {
    console.error("Error getting user's location:", error.message);
}


// * functions call
getCurrentDate();
getUserCity();