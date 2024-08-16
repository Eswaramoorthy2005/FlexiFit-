import React from 'react';
import './Expert.css';
import { useNavigate } from 'react-router-dom';
import wl from './wtlose.jpeg';
import muscle from './imgs/musclegain.jpeg';
import bgvid from './imgs/motive2.mp4';

function Expert() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="beginner-page">
      <video autoPlay loop muted className="background-video">
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h2 className="beginner-header">
          Select Your Motive
        </h2>
        <div className="beginner-card-container">
          <div onClick={() => handleCardClick('/exwl')}>
            <Card 
              title="Weight Loss" 
              image={wl} 
              description="This plan is designed for those looking to lose weight and improve overall fitness."
            />
          </div>
          <div onClick={() => handleCardClick('/exwg')}>
            <Card 
              title="Muscle Gain" 
              image={muscle}
              description="This plan is ideal for those looking to build muscle mass and strength."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, image, description }) {
  return (
    <div className="beginner-card">
      <img src={image} alt={title} className="beginner-card-image" />
      <h3 className="beginner-card-title">{title}</h3>
      <p className="beginner-card-description">{description}</p>
    </div>
  );
}

export default Expert;
