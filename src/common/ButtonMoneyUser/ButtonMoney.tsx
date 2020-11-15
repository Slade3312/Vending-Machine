import React from 'react';
import style from './ButtonMoney.module.scss';

type PropsButtonMoneyType = {
  coin: string;
  quantity: number;
  active?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

const ButtonMoney: React.FC<PropsButtonMoneyType> = ({ coin, quantity, active, onClick }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.coinDenomination}>{coin}</span>
      <button
        style={active ? undefined : { pointerEvents: 'none' }}
        className={style.button}
        aria-label="coin"
        type="button"
        onClick={onClick}
      />
      <span className={style.quantityMoney}>={quantity}</span>
    </div>
  );
};

export default ButtonMoney;
