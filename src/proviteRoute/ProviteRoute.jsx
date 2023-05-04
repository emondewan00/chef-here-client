import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
// eslint-disable-next-line 
const ProviteRoute = ({ children }) => {
  const {currentUser}=useContext(AuthContext)
  const location=useLocation();
  // if(loading) return <div>Loading.......</div>
  if (currentUser) return children;
  return <Navigate to="/login" state={{from:location}} />;
};

export default ProviteRoute;
