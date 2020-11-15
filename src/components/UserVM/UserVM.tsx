import React from 'react';
import style from './UserVM.module.scss';
import UserMoney from '../UserMoney/UserMoney';

const UserVM: React.FC = () => {
  const userName = 'Roman';
  return (
    <div className={style.wrapper}>
      <h3 className={style.userName}>{userName}</h3>
      <UserMoney />
    </div>
  );
};

export default UserVM;
