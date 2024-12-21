import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['accountID']);

  const handleLogout = async () => {
    try {
      await axios.post('http://192.168.192.25:5000/auth/logout', {}, { withCredentials: true });
      removeCookie('accountID'); // Remove the accountID cookie
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>You are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
