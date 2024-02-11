import React from 'react';
import '../styles/Banner.css'; 
import bannerImage from '../assets/bannerImage.jpg'; 

function Banner() {
  return (
    <div className="banner" id='banner'>
      <div className="overlay"></div>
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <h1 className="banner-text">TAITO AVENTURA <br />Tu agencia en San Pedro de Atacama</h1>
    </div>
  );
}

export default Banner;
