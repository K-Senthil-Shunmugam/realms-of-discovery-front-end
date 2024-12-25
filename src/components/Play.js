import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './Play.css';
import { FaMapMarkedAlt } from 'react-icons/fa'; // Import map icon

const Play = () => {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState(null);
  const [cookies] = useCookies(['accountDetails']);
  const [showMapImage, setShowMapImage] = useState(false); // Toggle for map preview
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter' && textInput.trim()) {
      const userId = cookies.accountDetails.accountid;
      const data = { userId, textInput };

      try {
        const result = await axios.post('http://192.168.192.25:5000/api/move', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setResponse(result.data);
      } catch (error) {
        console.error('Error during API request:', error);
      }
    }
  };

  const handleStartGame = async () => {
    const accountId = cookies.accountDetails.accountid;
    try {
      const result = await axios.post('http://192.168.192.25:5000/api/start_game', { accountId });
      setResponse(result.data);
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  };

  return (
    <div className="play-page">
      <div className="crt-container">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate('/')}>
          Back
        </button>

        {/* Room Image Display */}
        <div className="image-display">
          <img 
            src={
              response?.roomImageBase64
                ? `data:image/png;base64,${response.roomImageBase64}`
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/9TgZmkAAAAASUVORK5CYII='
            } 
            alt="Room" 
            className="play-image"
          />
        </div>

        {/* Display Text Section */}
        <div className="display-text-container">
          <div className="text-display">
            <p className="play-text">{response?.replyText || ''}</p>
          </div>
        </div>

        {/* Map Icon Display */}
        <div className="map-icon-container" onClick={() => setShowMapImage(true)}>
          <FaMapMarkedAlt className="map-icon" />
          <p>Open Map</p>
        </div>

        {/* Full-screen Map Preview */}
        {showMapImage && (
          <div className="map-overlay" onClick={() => setShowMapImage(false)}>
            <img 
              src="/images/logos/map.jpeg" 
              alt="Map Full View" 
              className="map-fullscreen"
            />
          </div>
        )}

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

        {/* Start New Game Button */}
        <button onClick={handleStartGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default Play;
