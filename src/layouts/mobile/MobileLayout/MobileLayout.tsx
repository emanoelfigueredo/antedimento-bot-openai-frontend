import { Outlet } from 'react-router-dom';
import style from './MobileLayout.module.css';
import { memo } from 'react';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

interface Props {}

const MobileLayout = ({}: Props) => {
  return (
    <div className={style.mobileLayout}>
      <Outlet />
      <BottomNavBar className={style.bottomNavbar}></BottomNavBar>
    </div>
  );
};

export default memo(MobileLayout);
