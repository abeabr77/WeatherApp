const apiKey = 'API Key here';

//Loads Seattle Weather automatically
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${apiKey}`;
fetch(weatherUrl)
        .then(response => response.json())
        .then(data => displayWeatherDetails(data))
        .catch(error =>{
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.')
        });


const button = document.getElementById('button');
button.onclick = getWeather;

async function getWeather(){
    const city = document.getElementById('inputLocation').value;
    console.log(city);
    if(!city){
        alert("Please enter a city");
        return;
    }

    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => displayWeatherDetails(data))
        .catch(error =>{
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Ensure city name has been spelled correctly')
        });
}

function displayWeatherDetails(data){
    console.log(data); //debug

    const iconDisplay = document.getElementById('icon');
    const temperatureDisplay = document.getElementById('temperature');
    const locationDisplay = document.getElementById('location');
    const weatherDisplay = document.getElementById('weather');
    const hilowDisplay = document.getElementById('hilow');

    const iconPath = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconPath}@2x.png`;
    iconDisplay.src = iconUrl;

    temperatureDisplay.innerText = kelvinToFahrenheit(data.main.temp) + "°";
    locationDisplay.innerText = data.name;
    weatherDisplay.innerText = data.weather[0].description;
    hilowDisplay.innerHTML = "H:" + kelvinToFahrenheit(data.main.temp_max) + "°F  L:" + kelvinToFahrenheit(data.main.temp_min) + "°F";
}

function kelvinToFahrenheit(temp){
    return Math.round((temp - 273.15) * 9/5 + 32);
}
