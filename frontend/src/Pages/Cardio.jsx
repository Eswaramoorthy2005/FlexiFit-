import React from 'react';
import ProductNavbar from './ProductNavbar/ProductNavbar';
import ProductCard from './ProductCard/ProductCard';
import './Cardio.css';

import image1 from '../Assets/images/image1.jpg';
import image2 from '../Assets/images/image2.jpg';
import image3 from '../Assets/images/image3.jpg';
import image4 from '../Assets/images/image4.jpg';
import image5 from '../Assets/images/image5.jpg';
import image6 from '../Assets/images/image6.jpg';
import image7 from '../Assets/images/image7.jpg';
import image8 from '../Assets/images/image8.jpg';

const products = [
  { id: 1, name: "The Flexpad", price: "Rs. 29,999", originalPrice: "Rs. 59,998", sold: "10K+ SOLD", rating: 5, image: image1 },
  { id: 2, name: "The Flextread", price: "Rs. 39,999", originalPrice: "Rs. 79,998", topSelling: true, rating: 5, image: image2 },
  { id: 3, name: "The Flextread+", price: "Rs. 79,999", originalPrice: "Rs. 139,998", rating: 5, image: image3 },
  { id: 4, name: "The Flexbike Lite", price: "Rs. 22,999", originalPrice: "Rs. 39,998", rating: 5, image: image4 },
  { id: 5, name: "The Flexbike", price: "Rs. 32,999", originalPrice: "Rs. 59,998", sold: "10K+ SOLD", rating: 5, image: image5 },
  { id: 6, name: "The Flexbike+", price: "Rs. 49,999", originalPrice: "Rs. 119,998", rating: 5, image: image6 },
  { id: 7, name: "The Flexrower Lite", price: "Rs. 29,999", originalPrice: "Rs. 59,998", rating: 4, image: image7 },
  { id: 8, name: "The Flexrower+", price: "Rs. 64,999", originalPrice: "Rs. 119,998", rating: 5, image: image8 },
];

const Cardio = () => {
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

export default Cardio;
