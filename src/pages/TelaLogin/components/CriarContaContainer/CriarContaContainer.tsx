import { memo, useState } from 'react';
import style from './CriarContaContainer.module.css';
import type { ModoTelaLogin } from '../../TelaLogin';
import InputLogin from '../InputLogin/InputLogin';
import { LuUserRound } from 'react-icons/lu';
import { GoLock } from 'react-icons/go';
import BotaoLogin from '../BotaoLogin/BotaoLogin';
import Botao from '../../../../components/Botao/Botao';
import { FaArrowLeft } from 'react-icons/fa';

interface Props {
  setModoTela: (modoTela: ModoTelaLogin) => void;
}

const CriarContaContainer = ({ setModoTela }: Props) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaRepetida, setSenhaRepetida] = useState('');

  const criarNovoUsuario = () => {};

  const voltarModoLogin = () => {
    setModoTela('LOGIN');
  };

  return (
    <div className={style.formulario}>
      <Botao
        onClick={voltarModoLogin}
        className={style.botaoVoltar}
        tipo="iconCircle"
        icone={<FaArrowLeft />}
      />
      <div className={style.titulo}>
        <div className={style.tituloNovoUsuario}>
          <h2>Novo usuário</h2>
        </div>
        <div className={style.linhaCriarConta}>
          <p>Insira as informações de cadastro</p>
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
            type="password"
            valor={senha}
          ></InputLogin>
          <InputLogin
            icone={<GoLock />}
            placeholder="Repita a senha"
            setValor={setSenhaRepetida}
            type="password"
            valor={senhaRepetida}
          ></InputLogin>
        </div>
        <div className={style.botoes}>
          <BotaoLogin width="90px" onClick={criarNovoUsuario}>
            Confirmar
          </BotaoLogin>
        </div>
      </div>
    </div>
  );
};

export default memo(CriarContaContainer);
