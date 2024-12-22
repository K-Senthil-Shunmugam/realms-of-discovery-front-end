import React, { useState } from 'react';
import './Play.css';

const Play = () => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="play-page">
      <div className="crt-container">
        <h1 className="play-title">Play Page</h1>
        
        {/* Image display */}
        <div className="image-display">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Placeholder" 
            className="play-image"
          />
        </div>

        {/* Text display */}
        <div className="text-display">
          <p className="play-text">This is a text display section. Add your text here.</p>
        </div>

        {/* Square map display in the top-right corner */}
        <div className="map-display">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Map" 
            className="map-image"
          />
        </div>

        {/* Text input at the bottom */}
        <div className="input-container">
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            className="text-input"
            placeholder="Enter something..."
          />
        </div>
      </div>
    </div>
  );
};

export default Play;
