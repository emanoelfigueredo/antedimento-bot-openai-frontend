import { PiRobot } from 'react-icons/pi';
import Header from '../../layouts/mobile/Header/Header';
import Sessao from '../../layouts/mobile/Sessao/Sessao';
import style from './TelaAssistentes.module.css';
import ButtonListOption from '../../layouts/mobile/ButtonListOption/ButtonListOption';
import { IoAdd } from 'react-icons/io5';

const TelaAssistentes = () => {
  const icone = <PiRobot size={22} />;
  return (
    <>
      <Header titulo="Assistentes" right={<IoAdd size={22} />}></Header>
      <Sessao className={style.sessoListagemAssistentes}>
        <ButtonListOption
          icone={icone}
          titulo="Assistente de vendas"
          subtitulo="Ativo"
        ></ButtonListOption>
        <ButtonListOption
          icone={icone}
          titulo="Assistente de vendas"
          subtitulo="Ativo"
        ></ButtonListOption>
        <ButtonListOption
          icone={icone}
          titulo="Assistente de vendas"
          subtitulo="Ativo"
        ></ButtonListOption>
        <ButtonListOption
          icone={icone}
          titulo="Assistente de vendas"
          subtitulo="Ativo"
        ></ButtonListOption>
      </Sessao>
    </>
  );
};

export default TelaAssistentes;
