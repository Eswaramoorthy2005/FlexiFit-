// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import './Login.css';

// export function Signup() {
//   const [formData, setFormData] = useState({
//     userName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.userName || !formData.email || !formData.password || !formData.confirmPassword) {
//       setErrorMessage("Please fill in all fields");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     const user = {
//       userName: formData.userName,
//       email: formData.email,
//       password: formData.password,
//       confirmPassword: formData.confirmPassword,
//     };

//     localStorage.setItem('user', JSON.stringify(user));

//     setFormData({
//       userName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });

//     alert('Signup successful!');
//     navigate('/adwork'); 
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="login-body">
//         <div className="login-form-container">
//           <form onSubmit={handleSubmit} className="login-form">
//             <h1>
//               <b>SIGN UP</b>
//             </h1>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <label>
//               <input
//                 type="text"
//                 name="userName"
//                 placeholder="USER NAME"
//                 value={formData.userName}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="EMAIL ADDRESS"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="SET PASSWORD"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="RE-ENTER PASSWORD"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <button type="submit" className="login-button">SIGNUP</button>
//             <br />
//             <Link to="/login" className="login-link">Go to Login</Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Login.css';

export function Signup() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.userName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      alert('Signup successful!');
      navigate('/adwork');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="login-body">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>
              <b>SIGN UP</b>
            </h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <label>
              <input
                type="text"
                name="userName"
                placeholder="USER NAME"
                value={formData.userName}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="SET PASSWORD"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="RE-ENTER PASSWORD"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <button type="submit" className="login-button">SIGNUP</button>
            <br />
            <Link to="/login" className="login-link">Go to Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
