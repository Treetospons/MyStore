import {takeLatest, call, put} from 'redux-saga/effects';
import {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductListFailure,
} from '../../reducers/product/listSlice';
import {fetchProductAll} from '~/services/rest-api/modules/productModule';
import {AxiosResponse} from 'axios';
import {TProductShema} from '~/services/rest-api/types/productType';

function* fetchProductList() {
  try {
    const {data, status}: AxiosResponse<TProductShema> = yield call(
      fetchProductAll,
    );

    if (status === 200) {
      yield put(fetchProductListSuccess({productList: data}));
    }
  } catch (error: any) {
    yield put(fetchProductListFailure({error: error.message}));
  }
}

function* watchFetchProductList() {
  yield takeLatest(fetchProductListRequest.type, fetchProductList);
}

export default watchFetchProductList;
