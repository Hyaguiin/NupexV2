// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { user, loading } = useContext(AuthContext);

  if(loading) {
    return <div>Loading...</div>
  }

  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
