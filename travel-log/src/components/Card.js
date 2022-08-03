import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot)

function Card() {
    return (
      <main>
        <div className="card">
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt="japan" className="card--img"/>    
          <div className="card--details">
            <div className="card--locations">
              <FontAwesomeIcon icon={faLocationDot} className="card--pin-icon" />
              <p className="card--country">Japan</p>
              <a href="https://www.google.com" className="card--googlemaps">View on Google Maps</a>
            </div>
            <h2 className="card--location">Mount Fuji</h2>
            <div className="card--description">
                <p className ="card--paragraph bold">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className ="card--paragraph">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
          </div>       
        </div>
      </main>

      )
    }

    export default Card