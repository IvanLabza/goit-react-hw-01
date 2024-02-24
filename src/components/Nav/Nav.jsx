import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    display: "flex",
    gap: 20,
  };
  return (
    <nav style={navStyle}>
      <Link to="/">Profile</Link>
      <Link to="/FriendList">FriendList</Link>
      <Link to="/TransactionHistory">TransactionHistory</Link>
    </nav>
  );
};

export default Nav;
