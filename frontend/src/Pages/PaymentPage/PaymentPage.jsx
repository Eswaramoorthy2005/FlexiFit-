import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Payment processing logic here
        alert('Payment Submitted');
    };

    const handleBackToCart = () => {
        navigate('/cart'); // Navigate back to the cart page
    };

    return (
        <div className="payment-page">
            <h1>Payment Information</h1>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label>Name on Card</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input 
                        type="text" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        placeholder="MM/YY" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input 
                        type="text" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Submit Payment</button>
                <button 
                    type="button" 
                    className="back-to-cart-button" 
                    onClick={handleBackToCart}
                >
                    Back to Cart
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;

