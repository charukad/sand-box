// client/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/main">Home</Link>
      </li>
      {/* Add more nav links as needed */}
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
