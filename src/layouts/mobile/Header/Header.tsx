import { memo, type ReactNode } from 'react';

import style from './Header.module.css';

interface Props {
  left?: ReactNode;
  right?: ReactNode;
  titulo?: string;
}

const Header = ({ left, right, titulo }: Props) => {
  return (
    <div className={style.header}>
      <div className={style.leftContainer}>{left}</div>
      {titulo && <div className={style.tituloContainer}>{titulo}</div>}
      <div className={style.rightContainer}>{right}</div>
    </div>
  );
};

export default memo(Header);
