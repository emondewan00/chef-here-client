import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const UserLogTrueOrFalse = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return children;
  return <Navigate to="/" />;
};

export default UserLogTrueOrFalse;
