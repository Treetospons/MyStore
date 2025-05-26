import {takeLatest, call, put} from 'redux-saga/effects';
import {
  fetchProductItemRequest,
  fetchProductItemSuccess,
  fetchProductItemFailure,
} from '../../reducers/product/itemSlice';
import {fetchProductById} from '~/services/rest-api/modules/productModule';
import {AxiosResponse} from 'axios';
import {TProductShema} from '~/services/rest-api/types/productType';

function* fetchProductItem(action: ReturnType<typeof fetchProductItemRequest>) {
  try {
    const {payload: id} = action;
    const {data, status}: AxiosResponse<TProductShema> = yield call(
      fetchProductById,
      id,
    );

    if (status === 200) {
      yield put(fetchProductItemSuccess({productItem: data}));
    }
  } catch (error: any) {
    yield put(fetchProductItemFailure({error: error.message}));
  }
}

function* watchFetchProductItem() {
  yield takeLatest(fetchProductItemRequest.type, fetchProductItem);
}

export default watchFetchProductItem;
