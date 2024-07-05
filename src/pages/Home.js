// src/pages/Home.js
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const contactDetails = {
    email: 'info@roboticssociety.com',
    phone: '+91 6280417424',
    address: 'PEC Chandigarh',
    socialMedia: {
      facebook: 'https://facebook.com/roboticssociety',
      twitter: 'https://twitter.com/roboticssociety',
      instagram: 'https://instagram.com/roboticssociety',
    },
  };

  return (
    <Container className="home-container">
      <Row className="mb-4">
        <Col>
          <CarouselComponent />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>How will joining robotics help students?</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Robotics teaches essential teamwork skills.</ListGroup.Item>
                <ListGroup.Item>
                  Students will be able to compete in robotics competitions held by our college or any other college and win prizes or scholarships.
                </ListGroup.Item>
                <ListGroup.Item>
                  Students learn how to communicate across different technology platforms and gain experience in creating an effective message for various audiences.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="contact-section">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faPhone} /> {contactDetails.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {contactDetails.address}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Follow Us</Card.Title>
              <div className="social-media-icons">
                <a href={contactDetails.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href={contactDetails.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href={contactDetails.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
