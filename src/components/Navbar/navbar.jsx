import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="header">
      <div className="header--links">
        <Link to="/" className="header--link" >
          Home
        </Link>
        <Link to="/skills" className="header--link">
          About
        </Link>
        <Link to="/works" className="header--link">
          Portfolio
        </Link>
        <Link to="/contact" className="header--link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
