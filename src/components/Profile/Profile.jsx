import React from "react";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <img className={css.profileImg} src={image} alt="Avatar" />
      <div className={css.profileInfo}>
        <h2>{name}</h2>
        <p className={css.profileInfoName}>@{tag}</p>
        <p className={css.profileInfoLocation}>{location}</p>
      </div>
      <div className={css.profileStats}>
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
