import React from 'react';
// Tell this JS file to use this image
import logo from './icon.png';
// import './logo.css';

const LogoIMG = () => {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" id="logoIMG" />;
}

export default LogoIMG;