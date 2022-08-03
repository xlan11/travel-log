import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope} from '@fortawesome/free-solid-svg-icons'

library.add(faEarthEurope)

function Header() {
    return (
    <div className="container">
      <header>
        <FontAwesomeIcon icon={faEarthEurope} className="header--globe"/>
        <h1>my travel journal.</h1>
      </header>  
    </div>
    )
}

export default Header