// import React, { useState, useEffect } from 'react';
// import './ListProduct.css';

// const ListProduct = () => {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
//         { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' }
//     ]);

//     useEffect(() => {
//         // Fetch products from server
//     }, []);

//     return (
//         <div className="list-product-container">
//             <h2>List of Products</h2>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th>Product Name</th>
//                         <th>Price</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map(product => (
//                         <tr key={product.id}>
//                             <td>{product.name}</td>
//                             <td>{product.price}</td>
//                             <td><img src={product.imageUrl} alt={product.name} /></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListProduct;

import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import AdminNavbar from '../Admin/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products/list');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error("Failed to fetch products.");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
        <div className="list-product-container">
            <h2>List of Products</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <img src={product.imageUrl} alt={product.name} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ListProduct;
