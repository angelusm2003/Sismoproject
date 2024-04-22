import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FeatureList.css';

const FeatureList = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/features')
      .then(response => {
        setFeatures(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching features:', error);
      });
  }, []);

  return (
    <div className="feature-list">
      <h1>Features</h1>
      <div className="feature-container">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <h2>{feature.attributes.title}</h2>
            <p><strong>Magnitude:</strong> {feature.attributes.magnitude}</p>
            <p><strong>Place:</strong> {feature.attributes.place}</p>
            <p><strong>Time:</strong> {new Date(parseInt(feature.attributes.time)).toLocaleString()}</p>
            <p><strong>Tsunami:</strong> {feature.attributes.tsunami ? 'Yes' : 'No'}</p>
            <p><strong>Magnitude Type:</strong> {feature.attributes.mag_type}</p>
            <p><strong>Coordinates:</strong> {feature.attributes.coordinates.latitude}, {feature.attributes.coordinates.longitude}</p>
            <a href={feature.links.external_url} target="_blank" rel="noopener noreferrer">View Details</a>
            <br /> 
            <Link to={`/features/${feature.id}/comments`} className="comment-link">Comment</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
