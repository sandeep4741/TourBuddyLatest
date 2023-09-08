import React from 'react';
import { FaPhone, FaPlane, FaCamera } from 'react-icons/fa';
import { MdLocationOn, MdWork } from 'react-icons/md';
import './FeatureIcons.css'; // Import the CSS file for styling

const FeatureIcons = () => {
  return (
    <div className="feature-icons">
      <div className="feature-icon">
        <FaPhone className="icon phone-icon" />
        <span className="text">24/7 Customer Support</span>
      </div>
      <div className="feature-icon">
        <MdLocationOn className="icon location-icon" />
        <span className="text">Explore Exciting Destinations</span>
      </div>
      <div className="feature-icon">
        <FaPlane className="icon plane-icon" />
        <span className="text">Convenient Travel Options</span>
      </div>
      <div className="feature-icon">
        <MdWork className="icon work-icon" />
        <span className="text">Business Travel Solutions</span>
      </div>
      <div className="feature-icon">
        <FaCamera className="icon camera-icon" />
        <span className="text">Photography Tours</span>
      </div>
    </div>
  );
};

export default FeatureIcons;