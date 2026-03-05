import { Navigate } from 'react-router-dom';
import { useAuth } from '../customHooks/useAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; //todo: add a better loading state
  if (!user) return <Navigate to="/login" replace />; 

  return <>{children}</>;
};
