import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="navbar-title">FlexiFit</div>
          </div>
          <div className="navbar-right">
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;