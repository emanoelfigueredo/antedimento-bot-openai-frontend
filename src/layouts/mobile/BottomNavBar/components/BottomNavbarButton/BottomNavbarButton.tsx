import { memo, type ReactNode } from 'react';
import style from './BottomNavbarButton.module.css';

interface Props {
  iconeOutline: ReactNode;
  iconeSolid: ReactNode;
  titulo: string;
  selecionado: boolean;
  onClick?: () => void;
}

const BottomNavbarButton = ({
  iconeOutline,
  iconeSolid,
  titulo,
  selecionado,
  onClick,
}: Props) => {
  const obterEstilosBtn = () => {
    const estilos: React.CSSProperties = {};
    if (selecionado) {
      estilos.color = 'rgba(0,0,0,0.8)';
    }
    return estilos;
  };
  return (
    <button
      onClick={onClick}
      style={obterEstilosBtn()}
      className={style.bottomNavbarButton}
    >
      <div className={style.iconeContainer}>
        {selecionado ? iconeSolid : iconeOutline}
      </div>
      <div className={style.tituloContainer}>{titulo}</div>
    </button>
  );
};

export default memo(BottomNavbarButton);
