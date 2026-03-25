import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    // Redirect to login if not authenticated as an admin
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
