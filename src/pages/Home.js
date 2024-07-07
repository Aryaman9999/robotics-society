import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { societiesData } from '../data/societiesData.js'; // Import the data file
import './Home.css';

const Home = ({ society }) => {
  const { email, phone, address, socialMedia } = societiesData[society];

  return (
    <Container className="home-container">
      <Row className="mb-4">
        <Col>
          <CarouselComponent society={society} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>How will joining {society === 'robotics' ? 'Robotics Society' : 'SME Society'} help students?</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Teaches essential teamwork skills.</ListGroup.Item>
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
                  <FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${email}`}>{email}</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faPhone} /> {phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
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
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
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
