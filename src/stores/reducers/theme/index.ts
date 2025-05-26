import {combineReducers} from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

const themeReducer = combineReducers({
  themeSlice,
});

export default themeReducer;
