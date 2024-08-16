import React from 'react';
import { Link } from 'react-router-dom';
import './ProductNavbar.css';

const ProductNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">FlexiFit</div>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/cardio">Cardio</Link></li>
        <li className="navbar-item"><Link to="/strength">Strength</Link></li>
        <li className="navbar-item"><Link to="/massager">Massagers</Link></li>
        <li className="navbar-item"><Link to="/accessories">Accessories</Link></li>
        <li className="navbar-item"><Link to="/cart">Cart</Link></li> 
      </ul>
    </nav>
  );
};

export default ProductNavbar;
