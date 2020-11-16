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
  user: {
    oneRuCoin: number,
    twoRuCoin: number,
    fiveRuCoin: number,
    tenRuCoin: number,
  }
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
  user: {
    oneRuCoin: 10,
    twoRuCoin: 30,
    fiveRuCoin: 20,
    tenRuCoin: 15
  },
};

type ActionUserType = {
  payload: {
    money: number,
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
type ActionСhangeType = {
  payload: number,
  type: string
}



const VMSlice = createSlice({
  name: 'VM',
  initialState,
  reducers: {
    addMoneyUser: (state, actionUser: ActionUserType) => {
      const { money, name } = actionUser.payload
      const { user } = state
      if (user[name] !== 0) {
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
    },
    addshortСhange: (state, actionСhange: ActionСhangeType) => {
      let { payload } = actionСhange;
      while (payload > 0) {
        switch (0) {
          case payload % 10: {
            payload -= 10;
            state.moneyVM.tenRuCoin -= 1
            state.user.tenRuCoin += 1
            break;
          }
          case payload % 5: {
            payload -= 5;
            state.moneyVM.fiveRuCoin -= 1;
            state.user.fiveRuCoin += 1
            break;
          }
          case payload % 2: {
            payload -= 2;
            state.moneyVM.twoRuCoin -= 1
            state.user.twoRuCoin += 1
            break;
          }
          case payload % 1: {
            payload -= 1;
            state.moneyVM.oneRuCoin -= 1
            state.user.oneRuCoin += 1
            break;
          }
          default:
            break;
        }
      }
      console.log(payload);
      state.sumVM = 0;
      state.statePuy = null;
    }
  },

});

export const { addMoneyUser, buyProduct, addshortСhange } = VMSlice.actions;
const VMReducer = VMSlice.reducer;
export default VMReducer;
