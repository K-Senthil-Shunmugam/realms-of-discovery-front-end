import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['accountDetails']);
  const username = cookies.username;

  const handleLogout = async () => {
    try {
      // Send the accountID to the backend in the body of the POST request
      await axios.post('http://192.168.192.25:5000/auth/logout', {
        accountID: cookies.accountID, // Include the accountID in the request body
      });

      // Remove the accountID cookie on the client-side
      removeCookie('accountID', { path: '/' });
      removeCookie('username', { path: '/' });

      // Redirect to the login page
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="home-page-body">
      <div className="home-container">
        <div className="home-box">
          <h1 className="home-h1-welcome-text">Welcome back {username}!</h1>
          <p className="home-paragraph">You are logged in!</p>
          <button onClick={handleLogout} className="home-logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
