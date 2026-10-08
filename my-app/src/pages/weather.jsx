import { useState, useEffect } from 'react';
import './Weather.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Weather() {
  const { state } = useLocation();
  const city = state?.location;
  const [weatherData, setWeatherData] = useState(false);

useEffect(() => {
  if (!city) return;
  const controller = new AbortController();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`,
    { signal: controller.signal }
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
      });
    })
    .catch(error => {
      if (!controller.signal.aborted) {
        console.error('Error fetching weather data:', error);
        alert('Invalid city name. Please try again.');
      }
    });

  return () => controller.abort();
}, [city]);

  return (
    <div className="weatherApp">
      <div className="weatherContainer">
        <div className="toppart">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="location">{city}</p>
        </div>
        <div className="circle circle1">
          <img 
  src={`https://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} 
  alt="weather icon" 
  className="weather-icon" width="200px" height="200px"
/>
        </div>
        <div className="circle circle2">
          <p className="temperature">{weatherData?.temperature && `${Math.round(weatherData.temperature)}°C`}</p>
          <p>Temperature</p>
        </div>
        <div className="circle circle3">
          <p className="Humidity">{weatherData?.humidity}%</p>
          <p>Humidity</p>
          </div>
        </div>
        <div className="circle circle4">
          <p className="Wind">{weatherData?.windSpeed} km/h</p>
          <p>Wind</p>
        </div>
      </div>
  )
}

export default Weather;