import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CardGallery.css';
import astronomico from "../assets/astronomico.jpg"
import sandboard from "../assets/sandboard.jpg"
import vallecito from "../assets/vallecito.png"
import valleluna from "../assets/valleluna.jpg"
import geysers from "../assets/geysers.jpg"

// Datos de las cards
const cardsData = [
  { id: 1, title: "ASTRONÓMICO. STARGAZING", image: astronomico, description: "Los cielos más limpios del mundo te esperan! ven a observar y conocer cúmulos, constelaciones y planetas, una experiencia inolvidable. Incluye fotos, cóctel y mucho más. The cleanest skies in the world await you! Come observe and learn about clusters, constellations and planets, an unforgettable experience. Includes photos, cocktail and much more." },
  { id: 2, title: "SANDBOARD", image: sandboard, description: "Conquista las dunas de arena con tu tabla y ven a divertirte con este adrenalínico deporte. Apto para principiantes. Conquer the sand dunes with your board and come have fun with this adrenaline sport. Suitable for beginners." },
  { id: 3, title: "VALLECITO", image: vallecito, description: "El lugar del planeta tierra mas parecido a Marte. Sumérgete en la cordillera de la sal y descubre el escenario de famosas películas y series. Incluye coctel con puesta de sol. The place on planet Earth most similar to Mars. Immerse yourself in the salt mountain range and discover the setting of famous films and series. Includes cocktail with sunset." },
  { id: 4, title: "VALLE DE LA LUNA", image: valleluna, description: "El parque más popular en San Pedro te espera, con un coctel increible y la más inolvidable puesta de sol. The most popular park in San Pedro awaits you, with an incredible cocktail and the most unforgettable sunset."},
  { id: 5, title: "GEYSERS DEL TATIO", image: geysers, description: "Descubre el campo geotermal de mayor altura del mundo. Incluye desayuno buffet (el más completo del mercado). Discover the highest geothermal field in the world. Includes buffet breakfast (the most complete on the market)." }
];

function CardGallery() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-gallery" id='tours'>
      <h2>Tours imperdibles</h2>
        <h2><i>Unmissable tours</i></h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card key={card.id} className="card" onClick={() => handleCardClick(card)}>
            <Card.Img variant="top" src={card.image} alt={card.title} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal show={selectedCard !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCard && selectedCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedCard && selectedCard.image} alt={selectedCard && selectedCard.title} />
          <p>{selectedCard && selectedCard.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardGallery;
