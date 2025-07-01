import style from './TelaLogin.module.css';
import { useState } from 'react';
import LoginContainer from './components/LoginContainer/LoginContainer';
import CriarContaContainer from './components/CriarContaContainer/CriarContaContainer';
import QRCodeContainer from './components/QRCodeContainer/QRCodeContainer';

export type ModoTelaLogin =
  | 'LOGIN'
  | 'ESQUECEU_SENHA'
  | 'CRIAR_CONTA'
  | 'QRCODE';

export const TelaLogin = () => {
  const [modoTela, setModoTela] = useState<ModoTelaLogin>('QRCODE');
  return (
    <div className={style.loginPage}>
      <div className={style.loginContainer}>
        <div className={style.leftContainer}>
          <div className={style.conteudo}>
            <div className={style.logo}>
              <div className={style.logoCircle}></div>
              <div className={style.logoText}>
                <h6>YOUR</h6>
                <h6>Logo</h6>
              </div>
            </div>
            <div className={style.info}>
              <div className={style.titleWellcome}>
                <h1>Olá,</h1>
                <h1>Bem vindo!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightContainer}>
          {modoTela == 'LOGIN' ? (
            <LoginContainer setModoTela={setModoTela}></LoginContainer>
          ) : modoTela == 'CRIAR_CONTA' ? (
            <CriarContaContainer
              setModoTela={setModoTela}
            ></CriarContaContainer>
          ) : modoTela == 'QRCODE' ? (
            <QRCodeContainer setModoTela={setModoTela}></QRCodeContainer>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
