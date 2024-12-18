import './App.css';
import { useState } from 'react';
import axios from 'axios'; // Make sure Axios is already installed

function App() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/add-name', { name });
      if (response.status === 200) {
        alert('Name submitted successfully!');
      } else {
        alert('Failed to submit name.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the name.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
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
      </header>
    </div>
  );
}

export default App;
