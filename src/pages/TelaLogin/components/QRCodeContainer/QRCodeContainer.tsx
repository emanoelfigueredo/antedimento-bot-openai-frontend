import { memo } from 'react';
import style from './QRCodeContainer.module.css';
import type { ModoTelaLogin } from '../../TelaLogin';
import Botao from '../../../../components/Botao/Botao';
import { FaArrowLeft } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';

interface Props {
  setModoTela: (modoTela: ModoTelaLogin) => void;
}

const QRCodeContainer = ({ setModoTela }: Props) => {
  const imagem =
    'data:image/gif;base64,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';

  const reloadQRCode = () => {};

  const voltarModoLogin = () => {
    setModoTela('LOGIN');
  };

  return (
    <div className={style.qrcodeContainer}>
      <div className={style.titulo}>
        <div className={style.botaoVoltar}>
          <Botao
            onClick={voltarModoLogin}
            tipo="iconCircle"
            icone={<FaArrowLeft />}
          />
        </div>
        <h2>QR Code</h2>
        <p>Escaneie o QR Code</p>
      </div>
      <div className={style.qrcodeImgContainer}>
        <div className={style.containerRealod}>
          <Botao
            onClick={reloadQRCode}
            className={style.botaoReloadQRcode}
            tipo="iconCircle"
            icone={<TbReload color="#fff" />}
          />
        </div>
        <img
          className={style.qrCodeImage}
          src={imagem}
          alt="Imagem do QR Code"
        />
      </div>
    </div>
  );
};

export default memo(QRCodeContainer);
