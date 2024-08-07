const apiKey = 'cb4aec70958c9cc5c25ed0195e59f4d1'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weatherInfo');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Error fetching weather data'));
}

function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>City not found</p>`;
        return;
    }
    
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
    weatherInfo.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${description}</p>
        <img src="${iconUrl}" alt="Weather icon">
    `;
}
