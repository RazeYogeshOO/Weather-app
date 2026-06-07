import React from 'react';
import './Weather.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import {bg1} from '../images/bg1.jpg'

function Weather() {
  const { state } = useLocation()
  const city = state?.location

  return (
    <div className="weatherApp">
      <div className="weatherContainer">
        <div className="toppart">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="location">{city}</p>
        </div>
        <div className="circle circle1">
          {/* <img src={bg1} alt="weather icon" className="weather-icon" /> */}
        </div>
        <div className="circle circle2">
          <p className="temperature">25°C</p>
          <p>Temperature</p>
        </div>
        <div className="circle circle3">
          <p className="Humidity">3%</p>
          <p>Humidity</p>
          </div>
        </div>
        <div className="circle circle4">
          <p className="Wind">10 km/h</p>
          <p>Wind</p>
        </div>
        {/* <div className="box1">
        </div> */}
      </div>
  )
}

export default Weather;