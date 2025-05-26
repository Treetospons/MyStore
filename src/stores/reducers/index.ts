import {combineReducers} from '@reduxjs/toolkit';
import productReducer from './product';
import themeReducer from './theme';

const rootReducer = combineReducers({
    productReducer,
    themeReducer,
});

export default rootReducer;
