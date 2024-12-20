import React from 'react';
import ReactDOM from 'react-dom/client';
import SignupPage from './SignupPage';  // Importing SignupPage component
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignupPage />  {/* Render SignupPage component */}
  </React.StrictMode>
);
