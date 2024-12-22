import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import { useCookies } from 'react-cookie';
import './Play.css';

const Play = () => {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState(null);
  const [cookies, remove] = useCookies(['accountDetails']);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter' && textInput.trim()) {
      const userId = cookies.accountDetails.accountid;
      console.log(userId);
      const data = { userId, textInput };

      try {
        // Use axios to send a POST request
        const result = await axios.post('http://192.168.192.25:5000/api/move', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setResponse(result.data); // Assuming the response contains roomimageBase64, mapBase64, replyText
      } catch (error) {
        console.error('Error during API request:', error);
      }
    }
  };

  return (
    <div className="play-page">
      <div className="crt-container">
        {/* Room Image Display */}
        <div className="image-display">
          <img 
            src={response?.roomimageBase64 ? `${response.roomimageBase64}` : 'placeholder-image.png'} 
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
            src={response?.mapBase64 ? `${response.mapBase64}` : 'placeholder-image.png'} 
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
