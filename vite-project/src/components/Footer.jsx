import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/logo.jpg" 
                alt="Little Lemon" 
                style={{ height: '60px', marginBottom: '1rem', borderRadius: '4px' }}
              />
            </div>
            <p>A family-owned Mediterranean restaurant in Chicago</p>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><Link to="/reservations">Reservations</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>123 Lemon Street</li>
              <li>Chicago, IL 60601</li>
              <li>(312) 555-LEMON</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social Media</h3>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;