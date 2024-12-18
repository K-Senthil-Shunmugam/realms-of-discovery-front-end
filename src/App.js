import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/add-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
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
