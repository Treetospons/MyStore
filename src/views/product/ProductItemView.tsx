import React, {Fragment, useMemo} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Box from '~/components/Box';
import Image from '~/components/Image';
import Typography from '~/components/Typography';
import useTheme from '~/hooks/useTheme';
import {colors} from '~/themes';
import {moderateScale} from '~/utils/scale';
import useProductItemViewmodel from '~/viewmodels/product/useProductItemViewmodel';

export type TProductItemView = {
  readonly productId: number;
};

const ProductItemView = () => {
  const {appTheme} = useTheme();

  const {isLoading, productItem, error, onRefresh} = useProductItemViewmodel();

  const render = useMemo(() => {
    if (isLoading) {
      return (
        <Box flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator
            size={'large'}
            color={colors[appTheme].primary100}
          />
        </Box>
      );
    }

    if (productItem) {
      return (
        <Fragment>
          <Box alignItems="center">
            <Image
              source={{
                uri: productItem?.image,
              }}
              width={moderateScale(350)}
              height={moderateScale(355)}
              rounded="xs"
              resizeMode="contain"
            />
          </Box>
          <Typography
            mt="sm"
            color={'primary100'}
            size="md"
            numberOfLines={1}
            ellipsizeMode="tail">
            {productItem?.title}
          </Typography>
          <Typography
            mt="xs"
            color={'primary100'}
            size="md"
            numberOfLines={1}
            ellipsizeMode="tail">
            category: {productItem?.category}
          </Typography>
          <Typography
            mt="xs"
            color={'primary100'}
            size="md"
            numberOfLines={1}
            ellipsizeMode="tail">
            ${productItem?.price}
          </Typography>
          <Typography mt="xs" color={'primary100'} size="md">
            {productItem?.description}
          </Typography>
        </Fragment>
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
  }, [isLoading, productItem, error]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isLoading ?? false}
          onRefresh={onRefresh}
          tintColor={colors[appTheme].primary100}
        />
      }
      style={styles.container}>
      {render}
    </ScrollView>
  );
};

export default ProductItemView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
});
