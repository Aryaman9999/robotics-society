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
    <div className="events-container">
      <h1>Upcoming Events</h1>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="event">
            <h2>{event.eventName}</h2>
            <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
            <p>{event.eventDescription}</p>
            {event.googleFormLink && (
              <div className="google-form-link">
                <a href={event.googleFormLink} target="_blank" rel="noopener noreferrer">
                  Register for this Event
                </a>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default Events;
