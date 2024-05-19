import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import backgroundVideo from "../images/hero-background.mp4";

function HeroSection() {

  const navigateToServicePage = () => {
    // This causes a full page reload to the services page
    window.location.href = '/services';
  };

  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to GEOGREATOTECHNICS & GEODREELS LTD</h1>
        <p>
          Leading the way in geotechnical engineering, environmental consulting
          services, and more.
        </p>
        <Link onClick={navigateToServicePage} to="/services" className="hero-btn">
          Explore Our Services
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
