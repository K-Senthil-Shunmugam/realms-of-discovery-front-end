import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(''); // State to hold the message from Flask

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.192.25:5000/add-name', { name });
      if (response.status === 200) {
        setMessage(response.data.message); // Update message with the server response
      } else {
        setMessage('Failed to submit name.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while submitting the name.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <h2>Hello World !!</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="App-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="App-button">
            Submit
          </button>
        </form>
        {message && <p>{message}</p>} {/* Display the message */}
      </header>
    </div>
  );
}

export default App;
