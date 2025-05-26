import {all, fork} from 'redux-saga/effects';
import watchFetchProductList from './listSaga';
import watchFetchProductItem from './itemSaga';

export default function* productSaga() {
  yield all([fork(watchFetchProductList)]);
  yield all([fork(watchFetchProductItem)]);
}
