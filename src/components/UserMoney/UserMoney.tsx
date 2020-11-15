import React from 'react';
import style from './UserMoney.module.scss';
import ButtonMoney from '../../common/ButtonMoneyUser/ButtonMoney';

const UserMoney: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <ButtonMoney coin="1₽" quantity={10} active />
      <ButtonMoney coin="2₽" quantity={30} active />
      <ButtonMoney coin="5₽" quantity={20} active />
      <ButtonMoney coin="10₽" quantity={15} active />
    </div>
  );
};

export default UserMoney;
