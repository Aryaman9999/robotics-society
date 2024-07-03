// src/Home.js
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import './Home.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  // Replace these with your actual contact details and social media links
  const contactDetails = {
    email: 'info@roboticssociety.com',
    phone: '+91 6280417424',
    address: 'PEC Chandigarh',
    socialMedia: {
      facebook: 'https://facebook.com/roboticssociety',
      twitter: 'https://twitter.com/roboticssociety',
      instagram: 'https://instagram.com/roboticssociety',
    }
  };

  return (
    <div className="home-container">
      <CarouselComponent />
      <div className="home-content">
        <h2>How will joining robotics help students?</h2>
        <ul>
          <li>Robotics teaches essential teamwork skills.</li>
          <li>Students will be able to compete in robotics competitions held by our college or any other college and win prizes or scholarships.</li>
          <li>Students learn how to communicate across different technology platforms and gain experience in creating an effective message for various audiences.</li>
        </ul>
      </div>

      {/* Contact Details and Social Media Links */}
      <div className="contact-section">
        <h3>Contact Us</h3>
        <ul className="contact-list">
          <li><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
          <li><FontAwesomeIcon icon={faPhone} /> {contactDetails.phone}</li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} /> {contactDetails.address}</li>
        </ul>

        <h3>Follow Us</h3>
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
      </div>
    </div>
  );
};

export default Home;
