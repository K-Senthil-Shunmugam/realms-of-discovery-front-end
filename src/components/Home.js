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
          Embark on a thrilling journey across six mystical realms, each filled with unique challenges, hidden secrets, and ancient powers. As a daring adventurer, 
          your quest is to uncover the lost essences of the cosmos and restore balance to the universe. Prepare to test your wits, face formidable foes, and solve complex 
          puzzles as you explore diverse environments, from fiery mountains to ocean depths.  
          
         What Awaits You:
          🌍 Earth Realm: Venture into the heart of nature, where you'll battle cunning enemies, traverse rugged landscapes, and discover the Earth Core—a powerful artifact that will help you unlock new realms.

          🌕 Moon Realm: Enter a world where darkness meets light, and illusion hides the truth. Solve riddles, face spectral beings, and uncover the mysteries hidden beneath the Moon's surface.

          ☀ Sun Realm: Brave the harsh desert landscapes, solve ancient puzzles, and collect the Solar Essence to harness the might of the Sun and gain access to even more powerful secrets.

          ⭐ Star Realm: Journey beyond the stars and into the celestial unknown. Confront astral guardians, unlock cosmic secrets, and unravel the mysteries of the cosmos itself.

          🌊 Sea Realm: Dive deep into the abyss of the ocean, where treasure and danger await beneath the waves. Conquer the Abyssal King and claim the Ocean Heart to navigate even further into the unknown.

          🔥 Inferno Realm: Enter the fiery heart of the world. With molten rivers, fiery beasts, and intense trials, you'll need to conquer the Infernal Overlord and collect the Flame Core to complete your journey and restore the balance of the realms.

          </p>        
        </section>

        {/* Section 2 - Features */}
        <section id="section2" className="features-section">
          <h2 className="home-h2-section-title">Are You Ready to Face the Challenges?</h2>
          <p className="home-paragraph">
          Your destiny awaits in the Realms of Discovery. Are you courageous enough to overcome the trials, solve the puzzles, and 
          defeat the mighty enemies in each realm? The universe's fate is in your hands. Step into the adventure, claim the legendary items, 
          and become the hero of the realms!
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
