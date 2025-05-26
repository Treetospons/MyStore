import {useEffect, useLayoutEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import useProductItemModel from '~/models/product/useProductItemModel';

type ProductItemRouteProp = RouteProp<ReactNavigation.RootParamList, 'ProductItemScreen'>;

const useProductItemViewmodel = () => {
  const navigation = useNavigation();
  const route = useRoute<ProductItemRouteProp>();
  const {isLoading, productItem, error, onFetchProductItem} =
    useProductItemModel();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'รายละเอียดสินค้า',
    });
  }, [navigation]);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    const {
      params: { productId },
    } = route;
    onFetchProductItem(productId);
  };

  return {
    isLoading,
    productItem,
    error,
    onRefresh,
  };
};

export default useProductItemViewmodel;
