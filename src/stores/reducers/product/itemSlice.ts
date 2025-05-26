import {createSlice} from '@reduxjs/toolkit';
import {TProductShema} from '~/services/rest-api/types/productType';

export type TProductItem = {
  isLoading: boolean;
  productItem: TProductShema | null;
  error: any;
};

const initialState: TProductItem = {
  isLoading: false,
  productItem: null,
  error: null,
};

const itemSlice = createSlice({
  name: 'productItem',
  initialState,
  reducers: {
    fetchProductItemRequest: (state, _action) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductItemSuccess: (state, action) => {
      state.isLoading = false;
      state.productItem = action.payload?.productItem;
    },
    fetchProductItemFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error;
    },
  },
});

export const {
  fetchProductItemRequest,
  fetchProductItemSuccess,
  fetchProductItemFailure,
} = itemSlice.actions;

export default itemSlice.reducer;
