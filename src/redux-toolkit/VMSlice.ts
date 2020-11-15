/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type UserMoney = {
  id: number,
  name: string,
  oneRuCoin: number,
  twoRuCoin: number,
  fiveRuCoin: number,
  tenRuCoin: number,
}

export type StateVM = {
  statePuy: boolean | null,
  sumVM: number,
  products: {
    tea: number,
    coffee: number,
    coffeeWitnMilk: number,
    juice: number
  },
  moneyVM: {
    oneRuCoin: number,
    twoRuCoin: number,
    fiveRuCoin: number,
    tenRuCoin: number,
  },
  users: UserMoney[]
}

const initialState: StateVM = {
  statePuy: null,
  sumVM: 0,
  products: {
    tea: 10,
    coffee: 20,
    coffeeWitnMilk: 20,
    juice: 15
  },
  moneyVM: {
    oneRuCoin: 100,
    twoRuCoin: 100,
    fiveRuCoin: 100,
    tenRuCoin: 100
  },
  users: [
    {
      id: 1,
      name: 'UserDefault',
      oneRuCoin: 10,
      twoRuCoin: 30,
      fiveRuCoin: 20,
      tenRuCoin: 15
    },
  ]
};

type ActionUserType = {
  payload: {
    money: number,
    id: number,
    name: 'oneRuCoin' | 'twoRuCoin' | 'fiveRuCoin' | 'tenRuCoin'
  },
  type: string
}
type ActionProdType = {
  payload: {
    price: number,
  },
  type: string
}



const VMSlice = createSlice({
  name: 'VM',
  initialState,
  reducers: {
    addMoneyUser: (state, actionUser: ActionUserType) => {
      const { money, id, name } = actionUser.payload
      const user = state.users.find(el => el.id === id) ?? state.users[0]
      if (user.oneRuCoin !== 0) {
        state.sumVM += money;
        state.moneyVM[name] += 1
        user[name] -= 1
      }
      state.statePuy = null
    },
    buyProduct: (state, actionProd: ActionProdType) => {
      const { price } = actionProd.payload
      if (state.sumVM >= price) {
        state.sumVM -= price;
        state.statePuy = true;
      }
      else state.statePuy = false;
    }
  },

});

export const { addMoneyUser, buyProduct } = VMSlice.actions;
const VMReducer = VMSlice.reducer;
export default VMReducer;
