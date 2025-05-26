import React, {useMemo, useCallback} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Box from '~/components/Box';
import Gap from '~/components/Gap';
import CardProduct from '~/components/modules/product/CardProduct';
import Typography from '~/components/Typography';
import {TProductShema} from '~/services/rest-api/types/productType';
import {colors} from '~/themes';
import useProductListViewmodel from '~/viewmodels/product/useProductListViewmodel';

const ProductListView = () => {
  const {
    isLoading,
    productList,
    itemHeight,
    error,
    onRefresh,
    onGotoProductItem,
    onHandelItemHeight,
  } = useProductListViewmodel();

  const renderItem = useCallback(
    ({item}: {item: TProductShema}) => {
      return (
        <CardProduct
          key={item.id.toString()}
          item={item}
          onPress={() => onGotoProductItem(item.id)}
          onLayout={e => onHandelItemHeight(e.nativeEvent.layout.height)}
        />
      );
    },
    [onHandelItemHeight, onGotoProductItem],
  );

  const render = useMemo(() => {
    if (isLoading) {
      return (
        <Box flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator size={'large'} color={colors.Light.primary100} />
        </Box>
      );
    }

    if (productList) {
      return (
        <FlatList
          data={productList}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <Gap height="md" />}
          getItemLayout={(_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
          })}
          horizontal={false}
          columnWrapperStyle={styles.columnStyle}
          numColumns={2}
          renderItem={renderItem}
          refreshing={isLoading}
          onRefresh={onRefresh}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          windowSize={20}
          extraData={productList}
        />
      );
    }

    if (error) {
      return (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Typography mt="xs" color={'primary100'} size="md">
            เกิดข้อผิดพลาด: {error}
          </Typography>
        </Box>
      );
    }

    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <Typography mt="xs" color={'primary100'} size="md">
          ไม่พบข้อมูลสินค้า
        </Typography>
      </Box>
    );
  }, [isLoading, productList, itemHeight, error, onRefresh, renderItem]);

  return render;
};

export default ProductListView;

const styles = StyleSheet.create({
  columnStyle: {
    justifyContent: 'space-evenly',
  },
});
