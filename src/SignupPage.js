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
