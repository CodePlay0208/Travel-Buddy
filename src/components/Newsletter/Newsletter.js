import React from 'react';
import './Newsletter.css';

import firstImage from '../../data/Images/image.png';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-left">
            <div className="newsletter-header">
              <div>Subscribe</div>
              <div>Newsletter</div>
            </div>
            <div className="newsletter-text">
              <h2>The Travel</h2>
              <p>Get inspired! Receive travel tips and behind the scenes stories.</p>
            </div>
            <div className="newsletter-form">
              <div className="text-field">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="email-input"
                />
              </div>
              <button className="newsletter-button">
                <span className="button-text">Subscribe</span>
              </button>
            </div>
          </div>
          <div className="newsletter-right">
            <img src={firstImage} alt="Newsletter" className="newsletter-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
