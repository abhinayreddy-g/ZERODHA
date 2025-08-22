import { Navigate } from 'react-router-dom';
import { useAuth } from './auth/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
