import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import wtwt from '../images/wtwt.png'
import bg1 from '../images/bg1.jpg'

function Home() {
  const [isStarted, setIsStarted] = useState(false)
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  function handleSearch() {
    if (location !== '') {
      navigate('/weather', { state: { location } })
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="App">
      <div className="container">
        <img src={bg1} alt="bg1" />
        <div className="box1">
          {!isStarted ? (
            <div className="wtwt-section">
              <img src={wtwt} alt="wtwt" width="430px" height="150px" />
              <button className="btn" onClick={() => setIsStarted(true)}>
                <b>Get Started</b>
              </button>
            </div>
          ) : (
            <div className="search-section">
              <div className="search-title">
                <FontAwesomeIcon icon={faLocationCrosshairs} className="location-icon" />
                <input
                  type="text"
                  className="location-search"
                  placeholder="Search for a location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
              <button className="search-btn" onClick={handleSearch}>
                <b>Search</b>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home