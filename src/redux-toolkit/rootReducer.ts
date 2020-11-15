import { combineReducers } from '@reduxjs/toolkit';
import VMReducer from './VMSlice';

const rootReducer = combineReducers({
  VM: VMReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
