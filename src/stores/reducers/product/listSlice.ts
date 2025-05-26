import {createSlice} from '@reduxjs/toolkit';
import { TProductShema } from '~/services/rest-api/types/productType';


export type TProductList = {
  isLoading: boolean,
  productList: TProductShema[],
  error: any,
}

const initialState: TProductList = {
  isLoading: false,
  productList: [],
  error: null,
};

const listSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    fetchProductListRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductListSuccess: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload?.productList;
    },
    fetchProductListFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error;
    },
  },
});

export const {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductListFailure,
} = listSlice.actions;

export default listSlice.reducer;
