import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/ContactForm.css';

const ContactMe = () => {
  return (
    <div className="bg-dark text-white py-4" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 className="mb-4">Contact</h2>
            <p>Say Hello!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form action="https://getform.io/f/a2596b8a-2eee-4af0-8e15-8ebdfc058054" method="POST">
              <Form.Group controlId="formName">
                <Form.Control type="text" name="name" placeholder="Enter your name" className="mb-4" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" name="email" placeholder="Enter your email" className="mb-4" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={6} name="message" placeholder="Enter your message" className="mb-4" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-50 btn-primary">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;
