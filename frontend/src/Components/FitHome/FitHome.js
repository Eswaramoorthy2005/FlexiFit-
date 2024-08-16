import React from 'react';
import './FitHome.css';
import TrainerCard from '../TrainerCard/TrainerCard';
import Footer from '../Footer/Footer';
import t1 from './card1.jpeg';
import t2 from './card2.jpeg';
import Navbar from '../Navbar/Navbar';

const trainers = [
  {
    image: t1,
    name: 'Bhagawat',
    email: 'bhagawat@example.com',
    phone: '123-456-7890'
  },
  {
    image: t2,
    name: 'Alexa',
    email: 'alexa@example.com',
    phone: '098-765-4321'
  }
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="hero-section">
          <h1>Welcome to Flexi Fitness Zone</h1>
          <p>Your journey to a healthier life starts here. Track your workouts, monitor your progress, and achieve your fitness goals.</p>
        </div>
        <div className="trainer-list">
          <p className="trainer-list-title">
            SUPPORT TRAINERS
          </p>
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              image={trainer.image}
              name={trainer.name}
              email={trainer.email}
              phone={trainer.phone}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
