import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal.jsx';

const InfoCard = () => {


    const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
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