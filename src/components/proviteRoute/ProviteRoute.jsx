import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line
const ProviteRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading )return <div>Loading.......!</div>
  if (currentUser) return children;
  return <Navigate to="/login" state={{ from: location }} />;
};

export default ProviteRoute;
