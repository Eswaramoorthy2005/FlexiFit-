import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/list-product">List Product</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/user-dashboard">User Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
