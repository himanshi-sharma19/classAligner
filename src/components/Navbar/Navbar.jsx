import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Class Aligner
      </div>
      <div className="navbar-links">
        <a href="#help">Help</a>
        <a href="#contact">Contact</a>
        <a href="#about">About Us</a>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar

