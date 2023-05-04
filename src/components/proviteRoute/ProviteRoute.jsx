import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line
const ProviteRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading && !currentUser)
    return <Navigate to="/login" state={{ from: location }} />;

  if (currentUser) return children;
};

export default ProviteRoute;
