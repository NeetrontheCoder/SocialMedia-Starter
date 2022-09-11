import React from 'react'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
      <div className="LogoSearch">
          {/* Twitter type logo, top left from img folder: */}
          <img src={Logo} alt="Twitter Bird Logo" />
            {/* Search bar: */}
          <div className="Search">
              <input type="text" placeholder="#Explore" />
              <div className="s-icon">
                  {/* importing UilSearch from iconscout library' */}
                  <UilSearch/>
              </div>
          </div>
      </div>
      
  )
}

export default LogoSearch