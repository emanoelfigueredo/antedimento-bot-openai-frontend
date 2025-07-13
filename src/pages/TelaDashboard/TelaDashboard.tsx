import style from './TelaDashboard.module.css';

import { FaBars } from 'react-icons/fa';
import Header from '../../layouts/mobile/Header/Header';
import Sessao from '../../layouts/mobile/Sessao/Sessao';
import CardSimples from '../../ui/CardSimples/CardSimples';

export const TelaDashboard = () => {
  return (
    <>
      <Header titulo="Dashboard"></Header>
      <Sessao titulo="Geral">
        <div className={style.gridCards}>
          <CardSimples
            tituloChildren={
              <div>
                Assistentes
                <br />
                Ativos
              </div>
            }
            texto="12"
          ></CardSimples>
          <CardSimples
            tituloChildren={
              <div>
                Conversas em
                <br />
                Andamento
              </div>
            }
            texto="45"
          ></CardSimples>
          <CardSimples
            className={style.cardSatisfacaoCliente}
            titulo="Satisfação do Cliente"
            texto="92%"
          ></CardSimples>
        </div>
      </Sessao>
    </>
  );
};
