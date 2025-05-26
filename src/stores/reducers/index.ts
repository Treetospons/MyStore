import {combineReducers} from '@reduxjs/toolkit';
import productReducer from './product';

const rootReducer = combineReducers({
    productReducer,
});

export default rootReducer;
