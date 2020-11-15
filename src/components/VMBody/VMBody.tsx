/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ButtonMoney from '../../common/ButtonMoneyUser/ButtonMoney';
import style from './VMBody.module.scss';
import Product from '../../common/Product/Product';
import { RootState } from '../../redux-toolkit/store';
import { Coin, Products, Price } from '../../types/typesVM';
import * as actions from '../../redux-toolkit/VMSlice';

const mapStateToProps = (state: RootState) => {
  const { products, moneyVM, sumVM, statePuy } = state.VM;
  return {
    products,
    moneyVM,
    sumVM,
    statePuy,
  };
};

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const VMBody: React.FC<Props> = ({ products, moneyVM, sumVM, buyProduct, statePuy }) => {
  const { tea, coffee, coffeeWitnMilk, juice } = products;
  const { oneRuCoin, twoRuCoin, fiveRuCoin, tenRuCoin } = moneyVM;
  const info = statePuy === null ? 'Ожидание' : statePuy ? 'Спасибо за покупку' : 'Недостаточно денег';
  return (
    <div className={style.wrapper}>
      <h2>Vending Machine</h2>
      <h4 className={style.infoH2}>ИНФО</h4>
      <section className={style.infoPanel}>{info}</section>
      <h4 className={style.contributedH2}>Внесенная сумма</h4>
      <section className={style.moneyContributed}>
        <span>{sumVM}</span>
        <button type="button">Сдача</button>
      </section>
      <div className={style.mainBody}>
        <section className={style.productsVM}>
          <Product
            name={Products.Tea}
            price={Price.Tea}
            quantity={tea}
            onClick={() => buyProduct({ price: Price.Tea })}
          />
          <Product
            name={Products.Coffee}
            price={Price.Coffee}
            quantity={coffee}
            onClick={() => buyProduct({ price: Price.Coffee })}
          />
          <Product
            name={Products.CoffeeMilk}
            price={Price.CoffeeMilk}
            quantity={coffeeWitnMilk}
            onClick={() => buyProduct({ price: Price.CoffeeMilk })}
          />
          <Product
            name={Products.Juice}
            price={Price.Juice}
            quantity={juice}
            onClick={() => buyProduct({ price: Price.Juice })}
          />
        </section>
        <section className={style.moneyVM}>
          <ButtonMoney coin={Coin.One} quantity={oneRuCoin} />
          <ButtonMoney coin={Coin.Two} quantity={twoRuCoin} />
          <ButtonMoney coin={Coin.Five} quantity={fiveRuCoin} />
          <ButtonMoney coin={Coin.Ten} quantity={tenRuCoin} />
        </section>
      </div>
    </div>
  );
};

export default connector(VMBody);
