import React from 'react';
import '../styles/BannerSecond.css'; // Importa tu archivo de estilos CSS para el banner
import bannerSecond from '../assets/bannerSecond.png'; // Importa la imagen del banner

function BannerSecond() {
  return (
    <div className="bannerSecond">
      <div className="overlay"></div>
      <img src={bannerSecond} alt="Banner" className="banner-image" />
      <h1 className="banner-text">Conoce San Pedro de Atacama <br /><i>Explore San Pedro de Atacama</i></h1>
    </div>
  );
}

export default BannerSecond;