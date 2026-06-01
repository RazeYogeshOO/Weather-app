import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import wtwt from './images/wtwt.png'
import bg1 from './images/bg1.jpg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={bg1} alt="bg1" width="100%" height="100%" position="absolute"/>
        <div className="box1">
          {/* <FontAwesomeIcon icon="fa-solid fa-location-crosshairs" /> */}
          <img src={wtwt} alt="wtwt" width="430px" height="150px" />
        </div>
      </div>
    </div>
  )
}

export default App;