import React from 'react';
import './Weather.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Weather() {
  return (
    <div className="weatherApp">
          <div className="weatherContainer">
            <div className="toppart">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="location"></p>
            </div>
            <div className="box1">
             </div>
        </div>
    </div>
  )
}

export default Weather;