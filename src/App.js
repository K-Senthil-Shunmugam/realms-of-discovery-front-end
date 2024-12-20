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

import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const lengthRequirement = password.length >= 8;
    const capitalRequirement = /[A-Z]/.test(password);
    const symbolRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberRequirement = /[0-9]/.test(password);

    if (!lengthRequirement) {
      setErrorMessage('Password must be at least 8 characters long.');
      return 'weak';
    }

    if (capitalRequirement && symbolRequirement && numberRequirement) {
      setErrorMessage('');
      return 'strong';
    }

    if (capitalRequirement || symbolRequirement || numberRequirement) {
      setErrorMessage('');
      return 'moderate';
    }

    setErrorMessage('Password must contain a capital letter, a symbol, and a number.');
    return 'weak';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = validatePassword(newPassword);
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordStrength !== 'strong') {
      setErrorMessage('Please choose a strong password before signing up.');
      return;
    }
    alert('Signup successful!');
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <h1>Signup Page</h1>
      </header>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            required
          />
        </label>
        {passwordStrength && (
          <div className={`password-strength ${passwordStrength}`}>
            {passwordStrength === 'weak' && <span>Weak password</span>}
            {passwordStrength === 'moderate' && <span>Moderate password</span>}
            {passwordStrength === 'strong' && <span>Strong password</span>}
          </div>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="signup-button">
          Submit
        </button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </div>
    </div>
  );
}

export default SignupPage;
