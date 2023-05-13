import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Use Location for remember user target page
  const location = useLocation();

  // if user is not available then return
  if (loading) {
    return;
  }

  // if user is logged in then go to private target page
  if (user) {
    return children;
  }

  // if user is not logged in then don't go to private target page. Navigate login page
  return <Navigate to="/login" state={location?.pathname} replace></Navigate>;
};

export default PrivateRoute;
