import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '~/stores';
import {fetchProductListRequest} from '~/stores/reducers/product/listSlice';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

const useProductListModel = () => {
  const {isLoading, productList, error} = useAppSelector(
    state => state.productReducer.listSlice,
  );
  const dispatch = useAppDispatch();

  const onFetchProductList = () => {
    dispatch(fetchProductListRequest());
  };

  return {
    isLoading,
    productList,
    error,
    onFetchProductList,
  };
};

export default useProductListModel;
