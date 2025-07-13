import { memo, type ReactNode } from 'react';
import style from './CardSimples.module.css';

interface Props {
  className?: string;
  titulo?: string;
  texto: string;
  tituloChildren?: ReactNode;
}

const CardSimples = ({ titulo, texto, className, tituloChildren }: Props) => {
  return (
    <div className={`${style.cardSimples} ${className}`}>
      <div className={style.tituloContainer}>
        {tituloChildren}
        {titulo}
      </div>
      <div className={style.textoContainer}>{texto}</div>
    </div>
  );
};

export default memo(CardSimples);
