// src/components/AnimatedServiceCard.js

import React from "react";
import "./AnimatedServiceCard.css";

const AnimatedServiceCard = ({ title, description, imageUrl, details }) => {
  return (
    <div className="service-card">
      <div
        className="service-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="service-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedServiceCard;
