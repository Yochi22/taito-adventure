import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CardGallery.css';
import astronomico from "../assets/astronomico.jpg"
import sandboard from "../assets/sandboard.jpg"

// Datos de las cards
const cardsData = [
  { id: 1, title: "ASTRONÓMICO. STARGAZING", image: astronomico, description: "Los cielos más limpios del mundo te esperan! ven a observar y conocer cúmulos, constelaciones y planetas, una experiencia inolvidable. Incluye fotos, cóctel y mucho más. The cleanest skies in the world await you! Come observe and learn about clusters, constellations and planets, an unforgettable experience. Includes photos, cocktail and much more." },
  { id: 2, title: "SANDBOARD", image: sandboard, description: "Conquista las dunas de arena con tu tabla y ven a divertirte con este adrenalínico deporte. Apto para principiantes. Conquer the sand dunes with your board and come have fun with this adrenaline sport. Suitable for beginners." },
  { id: 3, title: "VALLECITO", image: "https://via.placeholder.com/150", description: "El lugar del planeta tierra mas parecido a Marte. Sumérgete en la cordillera de la sal y descubre el escenario de famosas películas y series. Incluye coctel con puesta de sol. The place on planet Earth most similar to Mars. Immerse yourself in the salt mountain range and discover the setting of famous films and series. Includes cocktail with sunset." },
  { id: 4, title: "Card 4", image: "https://via.placeholder.com/150", description: "Descripción detallada de la Card 4" },
  { id: 5, title: "Card 5", image: "https://via.placeholder.com/150", description: "Descripción detallada de la Card 5" }
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
    <div className="card-gallery">
      <h2>Tours imperdibles</h2>
        <h2>Unmissable tours</h2>
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
