import './App.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import wtwt from './images/wtwt.png'
import bg1 from './images/bg1.jpg'

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const handleGetStarted = () => {
    setIsStarted(true);
  }

  return (
    <div className="App">
      <div className="container">
        <img src={bg1} alt="bg1" />
        <div className="box1">
          {!isStarted ? (
            <div className="wtwt-section">
              <img src={wtwt} alt="wtwt" width="430px" height="150px" />
              <button className="btn" onClick={handleGetStarted}>
                <b>Get Started</b>
              </button>
            </div>
          ) : (
            <div className="search-section">
              <input
                type="text"
                className="location-search"
                placeholder="Enter your location"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;