import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useProductListModel from '~/models/product/useProductListModel';

const useProductListViewmodel = () => {
  const navigation = useNavigation();
  const [itemHeight, setItemHeight] = useState(0);
  const {isLoading, productList, error, onFetchProductList} =
    useProductListModel();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'รายการสินค้า',
    });
  }, [navigation]);

  useEffect(() => {
    onRefresh();
  }, []);

  const onGotoProductItem = (itemId: number) => {
    navigation.navigate('ProductItemScreen', {
      productId: itemId,
    });
  };

  const onRefresh = () => {
    onFetchProductList();
  };

  const onHandelItemHeight = useCallback((height: number) => {
    setItemHeight(height);
  }, []);

  return {
    isLoading,
    productList,
    itemHeight,
    error,
    onRefresh,
    onGotoProductItem,
    onHandelItemHeight,
  };
};

export default useProductListViewmodel;
