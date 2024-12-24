import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Play.css';

const Play = () => {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState(null);
  const [cookies, remove] = useCookies(['accountDetails']);
  const [isMapPopupOpen, setIsMapPopupOpen] = useState(false); // State for popup
  const navigate = useNavigate(); // Initialize navigate

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

  const toggleMapPopup = () => {
    setIsMapPopupOpen(!isMapPopupOpen);
  };

  return (
    <div className="play-page">
      <div className="crt-container">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>

        {/* Room Image Display */}
        <div className="image-display">
          <img
            src={response?.roomImageBase64 ? `${response.roomImageBase64}` : 'data:image/png;base64,...'}
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

        {/* Map Image Display */}
        <div className="map-display" onClick={toggleMapPopup}>
          <img
            src={response?.mapBase64 ? `${response.mapBase64}` : 'data:image/png;base64,...'}
            alt="Map"
            className="map-image"
          />
        </div>

        {/* Fullscreen Popup for Map */}
        {isMapPopupOpen && (
          <div className="map-popup">
            <span className="close-popup" onClick={toggleMapPopup}>&times;</span>
            <img
              src={response?.mapBase64 ? `${response.mapBase64}` : 'data:image/png;base64,...'}
              alt="Map Fullscreen"
              className="map-popup-image"
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
      </div>
    </div>
  );
};

export default Play;
