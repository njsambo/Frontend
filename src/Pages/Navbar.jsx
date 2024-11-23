import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <div className="navbar-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/hobbies" className="nav-link">Hobbies</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default CustomNavbar;
