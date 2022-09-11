import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal.jsx';

const InfoCard = () => {

      // usestate for profilemodal
    const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          {/* clicking pen will fire the function and set modalOpened to true */}
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal modalOpened = {modalOpened} setModalOpened = {setModalOpened}  />
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