// import './App.css';
// import { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState(''); // State to hold the message from Flask

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://192.168.192.25:5000/add-name', { name });
//       if (response.status === 200) {
//         setMessage(response.data.message); // Update message with the server response
//       } else {
//         setMessage('Failed to submit name.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('An error occurred while submitting the name.');
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           <h2>Hi There !!!</h2>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="App-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type="submit" className="App-button">
//             Submit
//           </button>
//         </form>
//         {message && <p>{message}</p>} {/* Display the message */}
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Password strength checker
  const checkPasswordStrength = debounce((value) => {
    if (value.length < 6) {
      setPasswordStrength("weak");
    } else if (value.length < 10) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("strong");
    }
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!username) {
      setUsernameError(true);
      hasError = true;
    } else {
      setUsernameError(false);
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      setFormError(true);
    } else {
      setFormError(false);
      alert("Form submitted successfully!");
      // Add logic for submission, e.g., API call
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <h1>Signup</h1>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          {usernameError && (
            <p className="error-message">Username is required.</p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }}
            placeholder="Enter your password"
          />
          <div className="password-strength">
            <div className={`strength-bar ${passwordStrength}`}></div>
          </div>
          {passwordError && (
            <p className="error-message">Password is required.</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
        {formError && (
          <p className="error-message">Please fix the errors above.</p>
        )}
      </form>
      <div className="login-link">
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
