import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { TelaLogin } from '../pages/TelaLogin/TelaLogin';
import { TelaDashboard } from '../pages/TelaDashboard/TelaDashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<TelaLogin />} />

      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<TelaDashboard />} />
      </Route>
    </Routes>
  );
};
