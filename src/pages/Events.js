import React, { useEffect, useState } from 'react';
import client from '../contentfulClient';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const query = `
        {
          eventCollectionCollection {
            items {
              eventName
              eventDate
              eventDescription
              googleFormLink
              eventImage {
                url
              }
            }
          }
        }
      `;
      try {
        const response = await client.request(query);
        const eventData = response.eventCollectionCollection.items;
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container events-container">
      <h1 className="mt-5 mb-4">Upcoming Events</h1>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{event.eventName}</h2>
              <p className="card-text"><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
              {event.eventImage && (
                <div className="event-image-container">
                  <img src={event.eventImage.url} alt={event.eventName} className="event-image" />
                </div>
              )}
              <p className="card-text">{event.eventDescription}</p>
              {event.googleFormLink && (
                <div className="mt-3">
                  <a href={event.googleFormLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Register for this Event
                  </a>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default Events;
