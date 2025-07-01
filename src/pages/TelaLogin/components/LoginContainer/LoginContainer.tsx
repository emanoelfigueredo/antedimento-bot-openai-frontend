import { LuUserRound } from 'react-icons/lu';
import InputLogin from '../InputLogin/InputLogin';
import style from './LoginContainer.module.css';
import { GoLock } from 'react-icons/go';
import BotaoLogin from '../BotaoLogin/BotaoLogin';
import { memo, useState } from 'react';
import type { ModoTelaLogin } from '../../TelaLogin';

interface Props {
  setModoTela: (modoTela: ModoTelaLogin) => void;
}

const LoginContainer = ({ setModoTela }: Props) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {};

  const esqueceuSenha = () => {
    setModoTela('ESQUECEU_SENHA');
  };

  const criarConta = () => {
    setModoTela('CRIAR_CONTA');
  };

  return (
    <div className={style.formulario}>
      <div className={style.titulo}>
        <h2>Log In</h2>
        <div className={style.linhaCriarConta}>
          <div className={style.linha1}>
            <p>Não tem uma conta?</p>
            <button onClick={criarConta}>Criar uma conta</button>
          </div>
          <p>Isso vai levar apenas um minuto</p>
        </div>
      </div>
      <div className={style.inputsBotoes}>
        <div className={style.inputs}>
          <InputLogin
            icone={<LuUserRound />}
            placeholder="Usuário"
            setValor={setUsuario}
            type="text"
            valor={usuario}
          ></InputLogin>
          <InputLogin
            icone={<GoLock />}
            placeholder="Senha"
            setValor={setSenha}
            type="text"
            valor={senha}
          ></InputLogin>
        </div>
        <div className={style.botoes}>
          <BotaoLogin width="90px" onClick={entrar}>
            Entrar
          </BotaoLogin>
          <button onClick={esqueceuSenha} className={style.buttonEsqueceuSenha}>
            Esqueceu sua senha?
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginContainer);
