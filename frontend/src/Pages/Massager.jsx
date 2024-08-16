import React from 'react';
import ProductNavbar from './ProductNavbar/ProductNavbar';
import ProductCard from './ProductCard/ProductCard';
import './Cardio.css';

import image1 from '../Assets/images/image31.jpg';
import image2 from '../Assets/images/image32.jpg';
import image3 from '../Assets/images/image33.jpg';
import image4 from '../Assets/images/image34.jpg';

const products = [
  { id: 1, name: "FlexiFit Ultra Massage Gun", price: "From Rs. 4,999", originalPrice: null, rating: 5, image: image1 },
  { id: 2, name: "FlexiFit Turbo Massage Gun", price: "From Rs. 2,999", originalPrice: null, rating: 5, image: image2 },
  { id: 3, name: "Hot/Cold Massage Gun Head", price: "Rs. 2,999", originalPrice: "Rs. 3,999", rating: 5, image: image3 },
  { id: 4, name: "FlexiFit Foam Roller", price: "Rs. 1,499", originalPrice: "Rs. 2,598", rating: 5, image: image4 },
];

const Massager = () => {
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    // You can implement further functionality here, like updating the cart state
  };
  return (
    <div>
      <ProductNavbar/>
      <div className="page">
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      </div>
  );
};

export default Massager;
