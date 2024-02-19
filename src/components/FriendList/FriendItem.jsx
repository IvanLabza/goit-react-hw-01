import React from "react";

const FriendItem = ({ friend }) => {
  return (
    <li className="friend-item">
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p className={friend.isOnline ? "Online" : "Offline"}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendItem;
