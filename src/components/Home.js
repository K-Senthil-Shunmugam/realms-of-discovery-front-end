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
          Welcome to the Realms of Discovery!
          Step into a universe of wonder and mystery, where five legendary realms await your courage and wit. Your mission? To uncover the secrets of Earth, Moon, Sun, Star, and Sea, mastering each realm's unique challenges to restore balance to the cosmos.

          What Awaits You:
          🌍 Earth Realm: Begin your journey in the heart of nature. Navigate treacherous terrain, face cunning foes, and claim the Earth Core to unlock new horizons.
          🌕 Moon Realm: Venture into a realm of shadows and light, where illusions and riddles guard hidden truths.
          ☀️ Sun Realm: Brave the scorching heat and unravel ancient mysteries to harness the power of the sun.
          ⭐ Star Realm: Traverse the heavens and confront celestial forces to uncover the stars' secrets.
          🌊 Sea Realm: Dive into the unknown depths, where tides hold treasures—and dangers—untold.


          Are you ready to embark on this epic quest and conquer the five realms? Your destiny awaits!
          </p>
        </section>

        {/* Section 2 - Features */}
        <section id="section2" className="features-section">
          <h2 className="home-h2-section-title">Explore Our Features</h2>
          <p className="home-paragraph">
          Why You'll Love It:
          🧩 Puzzles & Challenges: Solve intricate riddles and overcome obstacles in each realm.
          🎭 Dynamic Choices: Your decisions shape your adventure, leading to different paths and outcomes.
          ⚔️ Battles & Allies: Confront enemies, earn rewards, and form alliances to strengthen your journey.
          ✨ Epic Storyline: A thrilling narrative filled with twists, mysteries, and unforgettable moments.
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
