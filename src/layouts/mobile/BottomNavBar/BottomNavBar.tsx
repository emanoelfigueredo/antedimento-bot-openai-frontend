import { memo } from 'react';
import style from './BottomNavBar.module.css';
import BottomNavbarButton from './components/BottomNavbarButton/BottomNavbarButton';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { PiRobot, PiRobotFill } from 'react-icons/pi';
import { LuChartLine } from 'react-icons/lu';
import { BsGear, BsGearFill } from 'react-icons/bs';
import { useNavegar } from '../../../hooks/useNavegar/useNavegar';
import { routes } from '../../../routes/routes';

interface Props {
  className?: string;
}

const BottomNavBar = ({ className }: Props) => {
  const { navegar, rotaAtualIs } = useNavegar();

  const navegarParaDashboard = () => {
    navegar({
      rota: routes.dashboard,
    });
  };

  const navegarParaAssistentes = () => {
    navegar({
      rota: routes.telaAssistentes,
    });
  };

  return (
    <nav className={`${style.bottomNavBar} ${className}`}>
      <BottomNavbarButton
        onClick={navegarParaDashboard}
        iconeOutline={<GoHome size={20} />}
        iconeSolid={<GoHomeFill size={20} />}
        selecionado={rotaAtualIs(routes.dashboard)}
        titulo="Dashboard"
      ></BottomNavbarButton>
      <BottomNavbarButton
        onClick={navegarParaAssistentes}
        iconeOutline={<PiRobot size={20} />}
        iconeSolid={<PiRobotFill size={20} />}
        selecionado={rotaAtualIs(routes.telaAssistentes)}
        titulo="Assistentes"
      ></BottomNavbarButton>
      <BottomNavbarButton
        iconeOutline={<LuChartLine size={20} />}
        iconeSolid={<LuChartLine size={20} />}
        selecionado={false}
        titulo="Análise"
      ></BottomNavbarButton>
      <BottomNavbarButton
        iconeOutline={<BsGear size={20} />}
        iconeSolid={<BsGearFill size={20} />}
        selecionado={false}
        titulo="Configurações"
      ></BottomNavbarButton>
    </nav>
  );
};

export default memo(BottomNavBar);
