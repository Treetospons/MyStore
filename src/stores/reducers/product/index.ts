import { combineReducers } from '@reduxjs/toolkit';
import listSlice from './listSlice';
import itemSlice from './itemSlice';

const productReducer = combineReducers({
  listSlice,
  itemSlice,
});

export default productReducer;
