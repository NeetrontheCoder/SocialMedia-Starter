import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileSide from '../../components/ProfileSide/ProfileSide'

const Profile = () => {
  return (
      <div className="Profile">
      <ProfileLeft />
      
      <div className="Profile-center">
        <ProfileCard />
       

      </div>
    </div>
  )
}

export default Profile