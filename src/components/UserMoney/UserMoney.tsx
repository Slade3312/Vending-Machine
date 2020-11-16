import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import style from './UserMoney.module.scss';
import ButtonMoney from '../../common/ButtonMoneyUser/ButtonMoney';
import { Coin } from '../../types/typesVM';

type payloadType = {
  money: number;
  name: 'oneRuCoin' | 'twoRuCoin' | 'fiveRuCoin' | 'tenRuCoin';
};

type Props = {
  oneRuCoin: number;
  twoRuCoin: number;
  fiveRuCoin: number;
  tenRuCoin: number;
  addMoneyUser: ActionCreatorWithPayload<payloadType, string>;
};

const UserMoney: React.FC<Props> = ({ oneRuCoin, tenRuCoin, twoRuCoin, fiveRuCoin, addMoneyUser }) => {
  return (
    <div className={style.wrapper}>
      <ButtonMoney
        coin={Coin.One}
        quantity={oneRuCoin}
        active
        onClick={() => addMoneyUser({ money: parseInt(Coin.One, 10), name: 'oneRuCoin' })}
      />
      <ButtonMoney
        coin={Coin.Two}
        quantity={twoRuCoin}
        active
        onClick={() => addMoneyUser({ money: parseInt(Coin.Two, 10), name: 'twoRuCoin' })}
      />
      <ButtonMoney
        coin={Coin.Five}
        quantity={fiveRuCoin}
        active
        onClick={() => addMoneyUser({ money: parseInt(Coin.Five, 10), name: 'fiveRuCoin' })}
      />
      <ButtonMoney
        coin={Coin.Ten}
        quantity={tenRuCoin}
        active
        onClick={() => addMoneyUser({ money: parseInt(Coin.Ten, 10), name: 'tenRuCoin' })}
      />
    </div>
  );
};

export default UserMoney;
