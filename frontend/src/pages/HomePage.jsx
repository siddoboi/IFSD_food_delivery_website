import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div className="home-container"> {/* <-- ADDED CLASS */}
      <h1>Welcome to the Food Delivery App!</h1>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in or sign up to continue.</p>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;