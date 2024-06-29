import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Resources.css'; // Optional: for additional styling

const Resources = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/orgs/Robotics-Society-PEC/repos') // Change 'your-organization' to your actual GitHub organization name
      .then(response => setRepos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="resources">
      <h1>Robotics Society Projects</h1>
      <ul className="repo-list">
        {repos.map(repo => (
          <li key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>⭐ {repo.stargazers_count} | Forks: {repo.forks_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
