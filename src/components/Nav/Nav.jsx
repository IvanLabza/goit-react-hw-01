import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    display: "flex",
    gap: 20,
    marginBottom: 50,
    justifyContent: "center",
  };
  const navItem = {
    padding: 20,
  };
  return (
    <nav style={navStyle}>
      <Link style={navItem} to="/">
        Profile
      </Link>
      <Link style={navItem} to="/FriendList">
        FriendList
      </Link>
      <Link style={navItem} to="/TransactionHistory">
        TransactionHistory
      </Link>
    </nav>
  );
};

export default Nav;
