import React from 'react';
import ProductNavbar from './ProductNavbar/ProductNavbar';
import ProductCard from './ProductCard/ProductCard';
import './Cardio.css';

import image1 from '../Assets/images/image21.jpg';
import image2 from '../Assets/images/image22.jpg';
import image3 from '../Assets/images/image23.jpg';
import image4 from '../Assets/images/image24.jpg';
import image5 from '../Assets/images/image25.jpg';
import image6 from '../Assets/images/image26.jpg';

const products = [
  { id: 1, image: image1, name: 'The Flexibell', price: '8,999', oldPrice: null, rating: 5 },
  { id: 2, image: image2, name: 'The Flexibell Stand', price: '8,999', oldPrice: '17,998', rating: 5 },
  { id: 3, image: image3, name: 'The Flexikettle', price: '6,999', oldPrice: null, rating: 5 },
  { id: 4, image: image4, name: 'The Flex Barbell', price: '12,999', oldPrice: null, rating: 4 },
  { id: 5, image: image5, name: 'The Flexbench Pro', price: '29,999', oldPrice: '59,998', rating: 5 },
  { id: 6, image: image6, name: 'The Flexbench', price: '14,999', oldPrice: '29,999', rating: 5 },
];


const Strength = () => {
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

export default Strength;