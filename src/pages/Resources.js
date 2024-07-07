import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentfulClient';
import './Resources.css'; // Optional: for additional styling

// Import Queries
import {
  ROBOTICS_RESOURCES_QUERY,
} from '../queries/robotics';

import {
  SME_RESOURCES_QUERY,
} from '../queries/sme';

const Resources = () => {
  const { society } = useParams();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      let query;
      switch (society) {
        case 'robotics':
          query = ROBOTICS_RESOURCES_QUERY;
          break;
        case 'sme':
          query = SME_RESOURCES_QUERY;
          break;
        default:
          query = '';
      }

      try {
        const response = await client.request(query);
        console.log('Response from Contentful:', response);
        setResources(response.resourceCollectionCollection.items);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchResources();
  }, [society]);

  return (
    <div className="resources">
      <h1>{society === 'robotics' ? 'Robotics Society' : 'SME Society'} Resources</h1>
      <ul className="resource-list">
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <li key={index} className="resource-item">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                {resource.title}
              </a>
              <p>{resource.description}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Resources;
