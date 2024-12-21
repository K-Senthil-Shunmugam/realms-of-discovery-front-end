import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['accountID']);
  const username = cookies.username;
  const handleLogout = async () => {
    try {
      
      // Send the accountID to the backend in the body of the POST request
      await axios.post('http://192.168.192.25:5000/auth/logout', {
        accountID: cookies.accountID, // Include the accountID in the request body
      });

      // Remove the accountID cookie on the client-side
      removeCookie('accountID');
      removeCookie('username');

      // Redirect to the login page
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div>
      <h1>Welcome back {username}!</h1>
      <p>You are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
