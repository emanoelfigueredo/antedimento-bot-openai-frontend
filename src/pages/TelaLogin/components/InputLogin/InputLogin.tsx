import { memo, useState, type ChangeEvent } from 'react';
import style from './InputLogin.module.css';

interface Props {
  icone: React.ReactNode;
  placeholder: string;
  type: string;
  valor: string;
  setValor: (string: string) => void;
}

const InputLogin = ({ icone, placeholder, type, valor, setValor }: Props) => {
  const [inputEmFoco, setInputEmFoco] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };

  const obterEstilosInputContainer = () => {
    const estilos: React.CSSProperties = {};
    if (inputEmFoco || valor !== '') {
      estilos.borderColor = 'var(--loginPrimaryColor)';
    }
    return estilos;
  };

  const obterEstilosInput = () => {
    const estilos: React.CSSProperties = {};
    if (inputEmFoco || valor !== '') {
      estilos.color = 'var(--loginPrimaryColor) !important';
    }
    return estilos;
  };

  return (
    <div
      style={obterEstilosInputContainer()}
      className={style.inputLoginContainer}
    >
      <input
        style={obterEstilosInput()}
        onFocus={() => setInputEmFoco(true)}
        onBlur={() => setInputEmFoco(false)}
        value={valor}
        onChange={handleOnChange}
        placeholder={placeholder}
        type={type}
      />
      {icone}
    </div>
  );
};

export default memo(InputLogin);
