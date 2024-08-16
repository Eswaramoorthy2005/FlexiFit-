import React, { useContext } from 'react';
import { CartContext } from '../App';
import ProductCard from './ProductCard/ProductCard';
import './ProductHome.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  
  const products = [
    { id: 1, name: 'Treadmill', image: 'treadmill.jpg', price: '$999', originalPrice: '$1299', rating: 5, sold: 'Sold Out', topSelling: true },
    { id: 2, name: 'Dumbbells', image: 'dumbbells.jpg', price: '$199', originalPrice: '$299', rating: 4 },
    // Add more products as needed
  ];

  return (
    <div className="home">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
