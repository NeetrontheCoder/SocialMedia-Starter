import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../Profile Card/ProfileCard";
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
    </div>
  );
};

export default ProfileSide;
