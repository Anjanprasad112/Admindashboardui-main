// ProtectedRoute.js
import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    navigate=Navigate();
  const isAuthenticated = !!localStorage.getItem('jwtToken'); // Check if token exists

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
