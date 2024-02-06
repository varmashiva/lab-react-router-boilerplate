import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>
        <Link to="/Home">Kalvium ❤️</Link>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "12%",
        }}
      >
        <h2>
          <Link to="/Contact">Contacts</Link>
        </h2>
        <h2>
          <Link to="/About">About</Link>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;