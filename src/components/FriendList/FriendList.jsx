import React from "react";
import FriendItem from "./FriendItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend">
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
