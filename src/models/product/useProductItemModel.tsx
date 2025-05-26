import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '~/stores';
import {fetchProductItemRequest} from '~/stores/reducers/product/itemSlice';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

const useProductItemModel = () => {
  const {isLoading, productItem, error} = useAppSelector(
    state => state.productReducer.itemSlice,
  );
  const dispatch = useAppDispatch();

  const onFetchProductItem = (id: number) => {
    dispatch(fetchProductItemRequest({id}));
  };

  return {
    isLoading,
    productItem,
    error,
    onFetchProductItem,
  };
};

export default useProductItemModel;
