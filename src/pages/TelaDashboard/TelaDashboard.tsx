import { FaBars } from 'react-icons/fa';
import Header from '../../layouts/mobile/Header/Header';

export const TelaDashboard = () => {
  return (
    <Header titulo="Dashboard" right={<FaBars />} left={<FaBars />}></Header>
  );
};
