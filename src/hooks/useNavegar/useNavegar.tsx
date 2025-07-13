import { useLocation, useNavigate } from 'react-router-dom';

export const useNavegar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navegar = ({ rota }: { rota: string }) => {
    navigate(rota);
  };

  const rotaAtualIs = (rota: string) => {
    return location.pathname == rota;
  };

  return { navegar, rotaAtualIs };
};
