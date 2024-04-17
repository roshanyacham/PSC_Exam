// Dashboard.js

import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Role: {user.role}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
