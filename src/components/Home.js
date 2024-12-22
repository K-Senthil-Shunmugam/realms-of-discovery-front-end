import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';  // Import react-scroll
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, remove] = useCookies(['accountDetails']);
  const username = cookies.accountDetails.username;

  const handleLogout = async () => {
    try {
      // Send the accountID to the backend in the body of the POST request
      await axios.post('http://192.168.192.25:5000/auth/logout', {
        accountID: cookies.accountDetails.accountid, // Include the accountID in the request body
      });

      // Remove the accountID cookie on the client-side
      remove('accountDetails'); 

      // Redirect to the login page
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="home-page-body">
      {/* Navbar with scroll links */}
      <div className="navbar">
        <Link to="welcome-section" smooth={true} duration={500} className="navbar-btn">Home</Link>
        <Link to="features-section" smooth={true} duration={500} className="navbar-btn">Features</Link>
        <Link to="team-section" smooth={true} duration={500} className="navbar-btn">Meet the Team</Link>
        <button onClick={handleLogout} className="navbar-btn">Logout</button>
      </div>

      <div className="home-container">
        {/* Section 1 */}
        <section id="welcome-section" className="welcome-section">
          <h1 className="home-h1-welcome-text">Welcome back {username}!</h1>
          <p className="home-paragraph">You are logged in!</p>
        </section>

        {/* Section 2 */}
        <section id="features-section" className="features-section">
          <h2 className="home-h2-section-title">Our Features</h2>
          <p className="home-paragraph">Discover the great features we offer to make your experience better.</p>
        </section>

        {/* Section 3 - Meet the Team */}
        <section id="team-section" className="team-section">
          <h2 className="home-h2-section-title">Meet the Team</h2>
          <div className="team-members">
            <div className="team-member-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
              <h3 className="team-member-name">John Doe</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>

            <div className="team-member-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
              <h3 className="team-member-name">Jane Smith</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>

            <div className="team-member-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
              <h3 className="team-member-name">Alice Brown</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/alicebrown" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/alicebrown" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
