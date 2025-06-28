import { useAuth } from '../../context/AuthContext/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
