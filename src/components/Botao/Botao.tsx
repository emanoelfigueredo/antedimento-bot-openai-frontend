import { memo } from 'react';
import styleIconCircle from './estilos/IconCircle.module.css';

export type TipoBotao = 'iconCircle';

interface Props {
  children?: string;
  tipo: TipoBotao;
  icone?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Botao = ({ children, tipo, icone, className = '', onClick }: Props) => {
  const obterClassNameBotao = () => {
    let classNameStyleSelecionado = null;
    switch (tipo) {
      case 'iconCircle':
        classNameStyleSelecionado = styleIconCircle;
        break;
    }
    return `${classNameStyleSelecionado.botao} ${className}`;
  };

  return (
    <button onClick={onClick} className={obterClassNameBotao()}>
      {children}
      {icone}
    </button>
  );
};

export default memo(Botao);
