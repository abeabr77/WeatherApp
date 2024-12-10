const apiKey = 'eb2bc2aba831cd312a0e5217756479b8';
const button = document.getElementById('button');
button.onclick = getWeather;

async function getWeather(){
    const city = document.getElementById('inputLocation').value;
    console.log(city);
    if(!city){
        alert("Enter a city");
        return;
    }
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => displayWeatherDetails(data))
        .catch(error =>{
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data.')
        });
}

function displayWeatherDetails(data){
    console.log("hello");
}
