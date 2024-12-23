import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, remove] = useCookies(['accountDetails']);
  const username = cookies.accountDetails?.username || 'Guest';

  const handleLogout = async () => {
    try {
      await axios.post('http://192.168.192.25:5000/auth/logout', {
        accountID: cookies.accountDetails?.accountid,
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
            Step into a universe of wonder and mystery, where five legendary realms await your courage and wit. Are you ready to embark on this epic quest and conquer the five realms? Your destiny awaits!
          </p>
        </section>

        {/* Section 2 - Features */}
        <section id="section2" className="features-section">
          <h2 className="home-h2-section-title">Explore Our Features</h2>
          <p className="home-paragraph">
            🧩 Puzzles & Challenges | 🎭 Dynamic Choices | ⚔️ Battles & Allies | ✨ Epic Storyline
          </p>
        </section>

        {/* Section 3 - Meet the Team */}
        <section id="section3" className="team-section">
          <h2 className="home-h2-section-title">Meet the Team</h2>
          <div className="team-members">
            {/* Team Member 1 */}
            <div className="team-member-card">
              <img src="/images/team/senthil.jpg" alt="Senthil" className="team-member-img" />
              <h3 className="team-member-name">Senthil Shunmugam K</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/senthil-shunmugam-b85071268/" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/K-Senthil-Shunmugam/" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member-card">
              <img src="/images/team/harshini.jpg" alt="Harshini" className="team-member-img" />
              <h3 className="team-member-name">Harshini V</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/harshini-vivek/" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/mvharsh/" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member-card">
              <img src="/images/team/varsha.jpg" alt="Varsha" className="team-member-img" />
              <h3 className="team-member-name">Varsha L</h3>
              <div className="team-member-links">
                <a href="https://www.linkedin.com/in/varsha-narayanan-l/" target="_blank" rel="noopener noreferrer" className="team-link">LinkedIn</a>
                <a href="https://github.com/Varsha1903/" target="_blank" rel="noopener noreferrer" className="team-link">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
