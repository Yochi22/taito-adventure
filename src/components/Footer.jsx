import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 icons-footer">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="col-md-3 icons-footer">
            <a href="https://api.whatsapp.com/send?phone=56984601773&text=Hola!%20estoy%20interesad@%20en%20sus%20servicios" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <p>+56 9 8460 1773</p>
          </div>
          <div className="col-md-3 icons-footer">
            <a href="https://www.instagram.com/taitoaventura/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <p>@taitoaventura</p>
          </div>
          <div className="col-md-3">
            <p>taitoaventura@gmail.com</p>
            <p>Caracoles 419 b8</p>
            <p>San Pedro de Atacama. Chile</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
