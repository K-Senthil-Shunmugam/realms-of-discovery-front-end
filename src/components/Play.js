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
        {/* Room Image Display */}
        <div className="image-display">
          <img 
            src={response?.roomimageBase64 ? `data:image/png;base64,${response.roomimageBase64}` : 'placeholder-image.png'} 
            alt="Room" 
            className="play-image"
          />
        </div>

        {/* Display Text Section */}
        <div className="display-text-container">
          <div className="text-display">
            <p className="play-text">{response?.replyText || 'This is a text display section. Add your text here.'}</p>
          </div>
        </div>

        {/* Map Image Display */}
        <div className="map-display">
          <img 
            src={response?.mapBase64 ? `data:image/png;base64,${response.mapBase64}` : 'placeholder-image.png'} 
            alt="Map" 
            className="map-image"
          />
        </div>

        {/* Input Text Section */}
        <div className="input-text-container">
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="text-input"
            placeholder="Enter your next move..."
          />
        </div>
      </div>
    </div>
  );
};

export default Play;
