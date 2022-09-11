import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard' 



const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      {/* Logo and explorebar */}
      <LogoSearch />
      {/* Profile card */}
      <InfoCard />
      {/* Followers card */}
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft