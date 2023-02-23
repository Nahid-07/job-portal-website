import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
