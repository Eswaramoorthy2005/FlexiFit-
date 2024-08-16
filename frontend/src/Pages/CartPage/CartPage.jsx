// import React, { useContext } from 'react';
// import { CartContext } from '../CartContext/CartContext';
// import './CartPage.css';
// import ProductNavbar from '../ProductNavbar/ProductNavbar';

// const CartPage = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   // Calculate the total price
//   const totalPrice = cart.reduce((total, product) => {
//     const price = parseFloat(product.price.replace(/[^\d.-]/g, '')); // Remove non-numeric characters
//     return total + price;
//   }, 0).toFixed(2);

//   return (
//     <div className="cart-page">
//       <ProductNavbar/>
//       <h1>Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((product) => (
//             <div key={product.id} className="cart-item">
//               <img src={product.image} alt={product.name} className="cart-item-image" />
//               <div className="cart-item-info">
//                 <div className="cart-item-name">{product.name}</div>
//                 <div className="cart-item-price">{product.price}</div>
//                 <button 
//                   className="remove-from-cart-button" 
//                   onClick={() => removeFromCart(product.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-summary">
//             <div className="cart-total">
//               <strong>Total Price: </strong> Rs. {totalPrice}
//             </div>
//             <button className="proceed-to-payment-button">
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './CartPage.css';
import ProductNavbar from '../ProductNavbar/ProductNavbar';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.price.replace(/[^\d.-]/g, '')); // Remove non-numeric characters
    return total + price;
  }, 0).toFixed(2);

  const handleProceedToPayment = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="cart-page">
      <ProductNavbar />
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-info">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-price">{product.price}</div>
                <button 
                  className="remove-from-cart-button" 
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-total">
              <strong>Total Price: </strong> Rs. {totalPrice}
            </div>
            <button 
              className="proceed-to-payment-button" 
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
