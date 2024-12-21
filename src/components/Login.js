import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['accountID']);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.192.25:5000/auth/login', {
        username,
        password,
      });
      console.log(response);
      // Set the accountID cookie upon successful login
      setCookie('accountID', response.data.accountID, { path: '/' });
      setCookie('username',username,{path: '/'});
      
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
