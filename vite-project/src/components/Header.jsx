
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img 
            src={logoImage}
              alt="Little Lemon Restaurant" 
              className="logo-image"
            />
            <span className="logo-text"></span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;