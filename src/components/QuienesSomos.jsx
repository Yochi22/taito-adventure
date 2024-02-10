import React from "react";
import "../styles/QuienesSomos.css";
import imagenQuienesSomos from "../assets/quienessomos.png";
import imagen1 from "../assets/icono-autobus.png";
import imagen2 from "../assets/icono-diploma.png";
import imagen3 from "../assets/icono-restaurante.png";

function QuienesSomos() {
  return (
    <div className="quienes-somos-container">
      <div className="content">
        <h2>¿Quiénes Somos?</h2>
        <h2>Who we are?</h2>
        <p>
          Una empresa joven y actual, desarrollando turismo con amor, para que
          todas tus experiencias sean únicas e inolvidables. Nos preocupamos de
          tu bienestar, entregándote el mejor servicio a un precio justo.
        </p>
        <p>
          A young and current company, developing tourism with love, so that all
          your experiences are unique and unforgettable. We care about you, the
          best service with a good price.
        </p>
      </div>
      <div className="image-container">
        <img
          src={imagenQuienesSomos}
          alt="Imagen Quiénes Somos"
          className="quienes-somos-image"
        />
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={imagen1} alt="Imagen 1" />
          <p>
            Profesionales certificados <br /> que harán que pases momentos increibles.
          </p>
          <p>Certified professionals <br /> who will make you have incredible moments.</p>
        </div>
        <div className="grid-item">
          <img src={imagen2} alt="Imagen 2" />
          <p>
            Todos nuestros tours incluyen alguna alimentación, y lo preparamos
            con el amor que te mereces. 
          </p>
          <p>All our tours include some food, and we
            prepare it with the love you deserve</p>
        </div>
        <div className="grid-item">
          <img src={imagen3} alt="Imagen 3" />
          <p>Vehículos cómodos y seguros. </p>
          <p>Comfortable and safe vehicles.</p>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
