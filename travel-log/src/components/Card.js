import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faVideo, faMap} from '@fortawesome/free-solid-svg-icons'

library.add(faLocationDot, faVideo, faMap)

export default function Card(props) {
    return (
      <main>
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="card--img"/>    
          <div className="card--details">
            <div className="card--locations">
              <FontAwesomeIcon icon={faLocationDot} className="card--pin-icon" />
              <p className="card--country">{props.location}</p>
              <FontAwesomeIcon icon={faMap} className="card--pin-icon" /><a href={props.googleMapsUrl} className="card--link">View on Google Maps</a>
              <FontAwesomeIcon icon={faVideo} className="card--pin-icon" /><a href={props.vlogUrl} className="card--link">Watch {props.title} vlog</a>
            </div>

            <h2 className="card--location">{props.title}</h2>
            
            <div className="card--description">
                <p className ="card--paragraph bold">{props.startDate}</p>
                <p className ="card--paragraph">{props.description}</p>
            </div>
          </div>       
        </div>
      </main>

      )
    }