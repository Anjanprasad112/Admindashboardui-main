// Logout.js
import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { logout } from '../services/authService';

const Logout = () => {
  const history = useNavigate ();

  const handleLogout = () => {
    logout();
    // Redirect to the login page after logout
    history('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
        Logout
      </button>
    </div>
  );
};

export default Logout;
