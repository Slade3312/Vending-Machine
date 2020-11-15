import React from 'react';
import ButtonMoney from '../../common/ButtonMoneyUser/ButtonMoney';
import style from './VMBody.module.scss';
import Product from '../../common/Product/Product';

const VMBody: React.FC = () => {
  const info = 'Спасибо!';
  return (
    <div className={style.wrapper}>
      <h2>Vending Machine</h2>
      <h4 className={style.infoH2}>ИНФО</h4>
      <section className={style.infoPanel}>{info}</section>
      <h4 className={style.contributedH2}>ИНФО</h4>
      <section className={style.moneyContributed}>
        <span>0</span>
        <button type="button">Сдача</button>
      </section>
      <div className={style.mainBody}>
        <section className={style.productsVM}>
          <Product name="Чай" price={13} quantity={10} />
          <Product name="Кофе" price={18} quantity={20} />
          <Product name="Кофе с молоком" price={21} quantity={20} />
          <Product name="Сок" price={35} quantity={15} />
        </section>
        <section className={style.moneyVM}>
          <ButtonMoney coin="1₽" quantity={100} />
          <ButtonMoney coin="2₽" quantity={100} />
          <ButtonMoney coin="5₽" quantity={100} />
          <ButtonMoney coin="10₽" quantity={100} />
        </section>
      </div>
    </div>
  );
};

export default VMBody;
