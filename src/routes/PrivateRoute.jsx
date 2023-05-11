import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
