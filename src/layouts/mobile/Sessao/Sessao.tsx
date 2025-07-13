import { memo, type ReactNode } from 'react';
import style from './Sessao.module.css';

interface Props {
  titulo?: string;
  children: ReactNode;
  className?: string;
}

const Sessao = ({ titulo, children, className }: Props) => {
  return (
    <section className={className}>
      {titulo && <h1 className={style.tituloContainer}>{titulo}</h1>}
      {children}
    </section>
  );
};

export default memo(Sessao);
