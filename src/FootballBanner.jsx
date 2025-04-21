import React from 'react';
import "./FootballBanner.css";
import cr1 from "./assets/images/modric.gif";

const FootballBanner = () => {
    return (
        <div className="gif-banner-container">
          {/* Fullscreen GIF */}
          <img
            src={cr1}
            alt="Football background"
            className="gif-banner-img"
          />
    
          {/* Centered Text */}
          <div className="gif-banner-text">
            <h1>NOGOMET</h1>
          </div>
        </div>
      );
};

export default FootballBanner;
