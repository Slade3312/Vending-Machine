import React from 'react';
import style from './Product.module.scss';

type PropsProductType = {
  name: string;
  price: number;
  quantity: number;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

const Product: React.FC<PropsProductType> = ({ name, price, quantity, onClick }) => {
  return (
    <button type="button" className={style.wrapper} onClick={onClick}>
      <h4>{name}</h4>
      <p>Цена : {price}₽</p>
      <p>Остаток : {quantity}порций </p>
    </button>
  );
};

export default Product;
