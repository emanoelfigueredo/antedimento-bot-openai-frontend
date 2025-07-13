import { memo, type ReactNode } from 'react';
import style from './ButtonListOption.module.css';

interface Props {
  icone: ReactNode;
  titulo: string;
  subtitulo: string;
}

const ButtonListOption = ({ icone, titulo, subtitulo }: Props) => {
  return (
    <div className={style.ButtonListOption}>
      <div className={style.iconeContainer}>{icone}</div>
      <div className={style.textContainer}>
        <h6>{titulo}</h6>
        <small>{subtitulo}</small>
      </div>
    </div>
  );
};

export default memo(ButtonListOption);
