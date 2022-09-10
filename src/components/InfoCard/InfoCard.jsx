import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

const InfoCard = () => {


    const [modalOpened, setModalOpened] = React.useState(false)
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModel opened={modalOpened} onClose={() => setModalOpened(false)} />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>In a relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>Berlin</span>
      </div>

      <div className="info">
        <span>
          <b>Works at: </b>
        </span>
        <span>BierBaroness</span>
      </div>

      <button class="button logout-button">Logout</button>
    </div>
  );
}

export default InfoCard