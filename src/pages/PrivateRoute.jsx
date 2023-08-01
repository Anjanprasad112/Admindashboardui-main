// PrivateRoute.js
import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = !!localStorage.getItem("access_token");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/"); // Redirect to the login page if not authenticated
    return null; // Render nothing for this route (null component)
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;
