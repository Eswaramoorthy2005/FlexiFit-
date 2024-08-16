import React from 'react';
import ProductNavbar from './ProductNavbar/ProductNavbar';
import run from './tredmillrun.mp4';
import './Home.css'; // Make sure to create this file

const Home = () => {
  return (
    <div className="home-page">
      <div autoPlay loop muted className="background-video">
      <video autoPlay loop muted>
        <source src={run} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <ProductNavbar />
      <div className="home-content">
        <h1>Flexi Fitness Product Store</h1>
      </div>
    </div>
  );
};

export default Home;
