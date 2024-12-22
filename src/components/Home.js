import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, remove] = useCookies(['accountDetails']);
  const username = cookies.accountDetails.username;

  const handleLogout = async () => {
    try {
      await axios.post('http://192.168.192.25:5000/auth/logout', {
        accountID: cookies.accountDetails.accountid,
      });
      remove('accountDetails');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="home-page-body">
      <div className="navbar">
        <h1 className="home-h1-welcome-text">Welcome back, {username}!</h1>
        <button onClick={() => navigate("#section1")} className="navbar-btn">Home</button>
        <button onClick={() => navigate("#section2")} className="navbar-btn">About</button>
        <button onClick={() => navigate("/play")} className="navbar-btn">Play</button>
        <button onClick={() => navigate("#section3")} className="navbar-btn">Meet the Team</button>
        <button onClick={handleLogout} className="navbar-btn">Logout</button>
      </div>

      <div className="home-container">
        {/* Section 1 - Welcome Section */}
        <section id="section1" className="welcome-section">
          <h2 className="home-h2-section-title">Welcome to Realms of Discovery!</h2>
          <p className="home-paragraph">
            Embark on a thrilling adventure where the realms of fantasy await. 
            Prepare yourself for a journey of discovery, danger, and excitement. 
            The game world is full of puzzles, magic, and mystery—each decision you make shapes your path.
          </p>
        </section>

        {/* Section 2 - Features */}
        <section id="section2" className="features-section">
          <h2 className="home-h2-section-title">Explore Our Features</h2>
          <p className="home-paragraph">
            - **Dynamic Storylines**: Every playthrough is unique with different paths and outcomes.  
            - **Interactive Puzzles**: Solve challenges and unravel secrets in your journey.  
            - **Character Customization**: Build your hero as you choose their abilities and traits.  
            - **Epic Quests**: Join legendary quests with the fate of the realms at stake.
          </p>
        </section>

        {/* Section 3 - Meet the Team */}
        <section id="section3" className="team-section">
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
