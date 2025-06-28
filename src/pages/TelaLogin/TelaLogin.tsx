import style from './TelaLogin.module.css';

export const TelaLogin = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.loginContainer}>
        <div className={style.leftContainer}>
          {/* <img
            className={style.imgBackgroundLoginContainer}
            src={backgroundLoginContainer}
            alt="Imagem de background "
          /> */}
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
        <div className={style.rightContainer}></div>
      </div>
    </div>
  );
};
