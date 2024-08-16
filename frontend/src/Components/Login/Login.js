// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import Navbar from '../Navbar/Navbar';

// export function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.username || !formData.password) {
//       setErrorMessage("Please fill in all fields");
//       return;
//     }

//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedUsername = storedUser?.username;
//     const storedPassword = storedUser?.password;

//     if (!storedUsername || !storedPassword) {
//       setErrorMessage("User not found. Please sign up.");
//       return;
//     }

//     if (
//       formData.username === storedUsername &&
//       formData.password === storedPassword
//     ) {
//       setLoginSuccess(true);
//       navigate('/dashboard');
//     } else {
//       setErrorMessage("Invalid credentials. Please try again.");
//     }

//     if (!loginSuccess) {
//       setFormData({
//         username: "",
//         password: "",
//       });
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="login-body">
//         <div className="login-form-container">
//           <form onSubmit={handleSubmit} className="login-form">
//             <h1>
//               <b>LOGIN</b>
//             </h1>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="USER NAME"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="PASSWORD"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="login-input"
//                 required
//               />
//             </label>
//             <Link to="/forgot-password" className="login-link">
//               FORGOT PASSWORD
//             </Link>
//             <button type="submit" className="login-button">LOGIN</button>
//             {loginSuccess && (
//               <Link to="/" className="login-link">Go to Home</Link>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../Navbar/Navbar';

export function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.username || !formData.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.username,
          password: formData.password
        }),
      });
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  
    setFormData({
      username: "",
      password: "",
    });
  };
  
  return (
    <div>
      <Navbar />
      <div className="login-body">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>
              <b>LOGIN</b>
            </h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <label>
              <input
                type="text"
                name="username"
                placeholder="USER NAME"
                value={formData.username}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                required
              />
            </label>
            <Link to="/forgot-password" className="login-link">
              FORGOT PASSWORD
            </Link>
            <button type="submit" className="login-button">LOGIN</button>
            {loginSuccess && (
              <Link to="/" className="login-link">Go to Home</Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


