import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from './UserVM.module.scss';
import UserMoney from '../UserMoney/UserMoney';
import { RootState } from '../../redux-toolkit/store';
import * as actions from '../../redux-toolkit/VMSlice';

const mapStateToProps = (state: RootState) => {
  const { users } = state.VM;
  return {
    users,
  };
};

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const UserVM: React.FC<Props> = ({ users, addMoneyUser }) => {
  const content = users.map((user) => {
    const { name, ...props } = user;
    return (
      <div key={name} className={style.wrapper}>
        <h3 className={style.userName}>{name}</h3>
        <UserMoney {...props} addMoneyUser={addMoneyUser} />
      </div>
    );
  });
  return <>{content}</>;
};

export default connector(UserVM);
