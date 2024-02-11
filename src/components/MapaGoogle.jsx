import React from 'react';

const MapaGoogle = () => {
  return (
    <div className="mapa-google">
      <iframe
        title="Mapa de Google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.5205656510905!2d-68.19996397525449!3d-22.911853697651704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a9756a84f0f3d7%3A0xe00e119383d489f0!2sTaito%20Aventura%20Agencia%20de%20Turismo!5e0!3m2!1ses!2sve!4v1707658842995!5m2!1ses!2sve"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapaGoogle;
