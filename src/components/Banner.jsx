import React from 'react';
import '../styles/Banner.css'; // Importa tu archivo de estilos CSS para el banner
import bannerImage from '../assets/bannerImage.jpg'; // Importa la imagen del banner

function Banner() {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <h1 className="banner-text">TAITO AVENTURA <br />Tu agencia en San Pedro de Atacama</h1>
    </div>
  );
}

export default Banner;
