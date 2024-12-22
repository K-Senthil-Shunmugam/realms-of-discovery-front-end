import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['accountDetails']); // Check if user is logged in

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={cookies.accountID === undefined ? <Navigate to="/login" /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

