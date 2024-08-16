import React from 'react';
import './LvlCard.css';
import { useNavigate } from 'react-router-dom';
import beg from './begin1.jpeg';
import inter from './inter.jpeg';
import expert from './expert.jpeg';
import bgvid from './imgs/lvl.mp4';

function LvlCard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="lvl-card-page">
      <video autoPlay loop muted className="background-video">
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        <header className="app-header">
          Select Your Level
        </header>
        <div className="app-card-container">
          <div onClick={() => handleCardClick('/beginner')}>
            <Card 
              title="Beginner" 
              image={beg}
              description="This level is for beginners who are just starting their fitness journey."
            />
          </div>
          <div onClick={() => handleCardClick('/Intermediate')}>
            <Card 
              title="Intermediate" 
              image={inter}
              description="This level is for those who have some gym experience and want to take it to the next level."
            />
          </div>
          <div onClick={() => handleCardClick('/expert')}>
            <Card 
              title="Expert" 
              image={expert}
              description="This level is for experts who have advanced fitness skills and knowledge."
            />
          </div>
        </div>
      </div>
  );
}

function Card({ title, image, description }) {
  return (
    <div className="app-card">
      <img src={image} alt={title} className="app-card-image" />
      <h3 className="app-card-title">{title}</h3>
      <p className="app-card-description">{description}</p>
    </div>
  );
}

export default LvlCard;
