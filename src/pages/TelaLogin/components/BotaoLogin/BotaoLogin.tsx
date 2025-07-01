import { memo } from 'react';
import style from './BotaoLogin.module.css';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  width?: string;
}

const BotaoLogin = ({ onClick, children, width = 'fit-content' }: Props) => {
  const obterEstilosBotao = () => {
    const estilos: React.CSSProperties = {};
    estilos.width = width;
    return estilos;
  };

  return (
    <button
      style={obterEstilosBotao()}
      onClick={onClick}
      className={style.botaoLogin}
    >
      {children}
    </button>
  );
};

export default memo(BotaoLogin);
