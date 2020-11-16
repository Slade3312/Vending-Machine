import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from './UserVM.module.scss';
import UserMoney from '../UserMoney/UserMoney';
import { RootState } from '../../redux-toolkit/store';
import * as actions from '../../redux-toolkit/VMSlice';

const mapStateToProps = (state: RootState) => {
  const { oneRuCoin, twoRuCoin, tenRuCoin, fiveRuCoin } = state.VM.user;
  return {
    oneRuCoin,
    twoRuCoin,
    tenRuCoin,
    fiveRuCoin,
  };
};

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserVM: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
      <h3 className={style.userName}>User1</h3>
      <UserMoney {...props} />
    </div>
  );
};

export default connector(UserVM);
