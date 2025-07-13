import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { TelaLogin } from '../pages/TelaLogin/TelaLogin';
import { TelaDashboard } from '../pages/TelaDashboard/TelaDashboard';
import MobileLayout from '../layouts/mobile/MobileLayout/MobileLayout';
import { routes } from './routes';
import TelaAssistentes from '../pages/TelaAssistentes/TelaAssistentes';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<TelaLogin />} />

      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MobileLayout />}>
          <Route
            path="/"
            element={<Navigate to={routes.dashboard} replace />}
          />
          <Route path={routes.dashboard} element={<TelaDashboard />} />
          <Route path={routes.telaAssistentes} element={<TelaAssistentes />} />
        </Route>
      </Route>
    </Routes>
  );
};
