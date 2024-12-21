import React from 'react';

function Homepage({ logout }) {
  return (
    <div>
      <h2>Welcome to your Homepage</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Homepage;
