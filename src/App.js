import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link for navigation
import Signup from './Components/SignupPage'; // Adjusted import path for SignupPage
// import Login from './Components/LoginPage';  // Uncomment this when you have a LoginPage component

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Text Adventure Game!</h1> {/* Welcome text */}
        <p>Get ready for an exciting adventure. Please sign up or log in to begin.</p>

        {/* Links for Signup and Login */}
        <div>
          <Link to="/SignupPage">
            <button className="App-button">Sign Up</button>
          </Link>
          {/* Uncomment the login link when you create the LoginPage component */}
          {/* <Link to="/LoginPage"> 
            <button className="App-button">Login</button>
          </Link> */}
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main Home Page */}
        <Route path="/SignupPage" element={<Signup />} /> {/* Signup Page */}
        {/* Uncomment the route for login when you create the LoginPage component */}
        {/* <Route path="/LoginPage" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
