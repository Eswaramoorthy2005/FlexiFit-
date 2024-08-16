// import React, { useState } from 'react';
// import './AddProduct.css';

// const AddProduct = () => {
//     const [product, setProduct] = useState({ name: '', price: '', image: null });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         setProduct({ ...product, image: e.target.files[0] });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add logic to handle product submission
//         console.log(product);
//     };

//     return (
//         <div className="add-product-container">
//             <h2>Add Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Product Name:
//                     <input type="text" name="name" value={product.name} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Price:
//                     <input type="text" name="price" value={product.price} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Image:
//                     <input type="file" name="image" onChange={handleImageChange} required />
//                 </label>
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// };

// export default AddProduct;

import React, { useState } from 'react';
import './AddProduct.css';
import AdminNavbar from '../Admin/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', price: '', image: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('image', product.image);

        try {
            const response = await fetch('http://localhost:8080/api/products/add', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                alert("Product added successfully!");
                setProduct({ name: '', price: '', image: null }); // Clear form after submission
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Error adding product.");
        }
    };

    return (
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
        </div>
    );
};

export default AddProduct;
