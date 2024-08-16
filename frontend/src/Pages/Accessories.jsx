import React from 'react';
import ProductNavbar from './ProductNavbar/ProductNavbar';
import ProductCard from './ProductCard/ProductCard';
import './Cardio.css';

import image1 from '../Assets/images/image41.jpg';
import image2 from '../Assets/images/image42.jpg';
import image3 from '../Assets/images/image43.jpg';
import image4 from '../Assets/images/image44.jpg';
import image5 from '../Assets/images/image45.jpg';
import image6 from '../Assets/images/image46.jpg';
import image7 from '../Assets/images/image47.jpg';
import image8 from '../Assets/images/image48.jpg';

const products = [
  { id: 1, name: "Flexnest Smart Weighing Scale", price: "Rs. 2,999", originalPrice: "Rs. 3,998", rating: 5, image: image1 },
  { id: 2, name: "The Flexdubs", price: "Rs. 1,299", originalPrice: "Rs. 5,000", rating: 4, image: image2 },
  { id: 3, name: "Flexnest Performance Mat", price: "Rs. 3,499", originalPrice: "Rs. 6,999", rating: 5, image: image3 },
  { id: 4, name: "Yoga Strap", price: "Rs. 299", originalPrice: "Rs. 699", rating: 5, image: image4 },
  { id: 5, name: "The Flexbangle", price: "Rs. 1,999", originalPrice: "Rs. 4,998", rating: 5, image: image5 },
  { id: 6, name: "The Flexbottle Pro", price: "Rs. 999", originalPrice: "Rs. 2,598", rating: 5, image: image6 },
  { id: 7, name: "Interlockable Gym Flooring", price: "Rs. 1,999", originalPrice: "Rs. 4,998", rating: 5, image: image7 },
  { id: 8, name: "The Flexmask", price: "Rs. 499", originalPrice: "Rs. 598", rating: 5, image: image8 },
];

const Accessories = () => {
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

export default Accessories;
