import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section destinations">
          <h2>Our Destinations</h2>
          <ul>
            <li><a href="/">Bangalore</a></li>
            <li><a href="/">Delhi</a></li>
            <li><a href="/">Tamil Nadu</a></li>
            <li><a href="/">Mumbai</a></li>
          </ul>
        </div>
        <div className="footer-section blogs">
          <h2>Travel Blogs</h2>
          <ul>
            <li><a href="/">Mumbai Travel Guide</a></li>
            <li><a href="/">Delhi Travel Guide</a></li>
            <li><a href="/">Tamil Nadu Travel Guide</a></li>
            <li><a href="/">Bangalore Travel Guide</a></li>
          </ul>
        </div>
        <div className="footer-section about">
          <h2>About Us</h2>
          <ul>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Work with us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul className="social-icons">
            <li className="facebook"><a href="https://facebook.com" aria-label="Facebook"></a></li>
            <li className="twitter"><a href="https://twitter.com" aria-label="Twitter"></a></li>
            <li className="youtube"><a href="https://youtube.com" aria-label="YouTube"></a></li>
            <li className="instagram"><a href="https://instagram.com" aria-label="Instagram"></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
