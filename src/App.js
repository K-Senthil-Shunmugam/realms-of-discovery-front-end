import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// Import Components
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['accountID']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.accountID) {
      // Check if the cookie exists to determine if the user is logged in
      setIsLoggedIn(true);
    }
  }, [cookies]);

  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/auth/logout');
      removeCookie('accountID');  // Remove the cookie to log the user out
      setIsLoggedIn(false);  // Update the state to reflect the logged-out status
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => (isLoggedIn ? <Redirect to="/home" /> : <Login />)} />
        <Route path="/signup" component={Signup} />
        <Route path="/home">
          {isLoggedIn ? <Homepage logout={logout} /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
