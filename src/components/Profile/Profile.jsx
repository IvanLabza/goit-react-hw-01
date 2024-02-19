import React from "react";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <img className="profile-img" src={image} alt="Avatar" />
      <div className="profile-info">
        <h2>{name}</h2>
        <p className="profile-info-name">@{tag}</p>
        <p className="profile-info-location">{location}</p>
      </div>
      <div className="profile-stats">
        <ul>
          <li>
            <span>Followers</span> {stats.followers}
          </li>
          <li>
            <span>Views</span> {stats.views}
          </li>
          <li>
            <span>Likes</span> {stats.likes}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
