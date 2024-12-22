import React, { useState } from 'react';
import './Play.css';

const Play = () => {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter' && textInput.trim()) {
      const userId = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      const data = { userId, textInput };
      const response = await fetch('/api/move', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponse(result); // Assuming the response contains roomimage-base64, map-base64, replytext
    }
  };

  return (
    <div className="play-page">
      <div className="crt-container">
        <h1 className="play-title">Play Page</h1>
        
        {/* Room Image Display */}
        <div className="image-display">
          <img 
            src={`data:image/png;base64,${response?.roomimageBase64 || 'placeholder'}`} 
            alt="Room" 
            className="play-image"
          />
        </div>

        {/* Text Display */}
        <div className="text-display">
          <p className="play-text">{response?.replyText || 'This is a text display section. Add your text here.'}</p>
        </div>

        {/* Map Image Display */}
        <div className="map-display">
          <img 
            src={`data:image/png;base64,${response?.mapBase64 || 'placeholder'}`} 
            alt="Map" 
            className="map-image"
          />
        </div>

        {/* Text Input Section */}
        <div className="input-container">
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="text-input"
            placeholder="Enter something..."
          />
        </div>
      </div>
    </div>
  );
};

export default Play;
