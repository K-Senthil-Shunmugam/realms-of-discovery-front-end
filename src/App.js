// import './App.css';
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import Signup from './SignupPage';
// //import Login from './Login';

// function Home() {
//   // const [name, setName] = useState('');
//   // const [message, setMessage] = useState(''); // State to hold the message from Flask

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://192.168.192.25:5000/add-name', { name });
//   //     if (response.status === 200) {
//   //       setMessage(response.data.message); // Update message with the server response
//   //     } else {
//   //       setMessage('Failed to submit name.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     setMessage('An error occurred while submitting the name.');
//   //   }
//   // };

//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <form onSubmit={handleSubmit}>
//   //         <h2>Hi There !!!</h2>
//   //         <input
//   //           type="text"
//   //           placeholder="Enter your name"
//   //           className="App-input"
//   //           value={name}
//   //           onChange={(e) => setName(e.target.value)}
//   //         />
//   //         <button type="submit" className="App-button">
//   //           Submit
//   //         </button>
//   //       </form>
//   //       {message && <p>{message}</p>} {/* Display the message */}
//   //     </header>
//   //   </div>
//   // );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Main Home Page */}
//         <Route path="/SignupPage" element={<Signup />} /> {/* Signup Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// /*<Route path="/login" element={<Login />} /> {/* Login Page */

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
