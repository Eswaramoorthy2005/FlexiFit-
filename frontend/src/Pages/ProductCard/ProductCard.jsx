import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      {product.sold && <div className="product-badge">{product.sold}</div>}
      {product.topSelling && <div className="product-badge top-selling">Top Selling</div>}
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-rating">{Array(product.rating).fill("★").join('')}</div>
        <div className="product-price">
          {product.price} <span className="product-original-price">{product.originalPrice}</span>
        </div>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

