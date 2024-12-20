import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Signup from './SignupPage';
//import Login from './Login';

function Home() {
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState(''); // State to hold the message from Flask

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://192.168.192.25:5000/add-name', { name });
  //     if (response.status === 200) {
  //       setMessage(response.data.message); // Update message with the server response
  //     } else {
  //       setMessage('Failed to submit name.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setMessage('An error occurred while submitting the name.');
  //   }
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <form onSubmit={handleSubmit}>
  //         <h2>Hi There !!!</h2>
  //         <input
  //           type="text"
  //           placeholder="Enter your name"
  //           className="App-input"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //         <button type="submit" className="App-button">
  //           Submit
  //         </button>
  //       </form>
  //       {message && <p>{message}</p>} {/* Display the message */}
  //     </header>
  //   </div>
  // );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main Home Page */}
        <Route path="/SignupPage" element={<Signup />} /> {/* Signup Page */}
      </Routes>
    </Router>
  );
}

export default App;
/*<Route path="/login" element={<Login />} /> {/* Login Page */
