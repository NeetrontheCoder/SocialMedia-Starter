import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg-modified.png";
import "./ProfileCard.css";

const ProfileCard = () => {


  const ProfilePage = true;
      
    return (
      /* The entire card. */
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>
        {/* User name + title */}
        <div className="ProfileName">
          <span>Neetron the Great</span>
          <span>Junior Full Stack Developer</span>
        </div>{" "}
        {/* Follower Information */}
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>8,966</span>
              <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1</span>
              <span>Following</span>
            </div>

            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {ProfilePage ? "" : <span>My Profile</span>}
      </div>
    );
};

export default ProfileCard;
