import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '~/components/Box';
import Card, {TCard} from '~/components/Card';
import Image from '~/components/Image';
import Typography from '~/components/Typography';
import {TProductShema} from '~/services/rest-api/types/productType';
import {moderateScale} from '~/utils/scale';

type TCardProduct = {
  item: TProductShema;
  onPress?: () => void;
} & TCard;

const CardProduct = ({item, onPress, onLayout}: TCardProduct) => {
  const render = useMemo(() => {
    if (!item) {
      return null;
    }

    return (
      <Card
        width={moderateScale(185)}
        borderColor="secondary100"
        rounded="xs"
        onLayout={onLayout}>
        <Box alignItems="center">
          <Image
            source={{uri: item.image}}
            width={moderateScale(120)}
            height={moderateScale(120)}
            rounded="xs"
            resizeMode="contain"
          />
        </Box>
        <Typography
          mt="xxs"
          color={'primary100'}
          size="md"
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.title}
        </Typography>
        <Typography
          mt="xxs"
          color={'primary100'}
          size="xs"
          numberOfLines={1}
          ellipsizeMode="tail">
          ${item.price}
        </Typography>
      </Card>
    );
  }, [item, onLayout]);

  return <TouchableOpacity onPress={onPress}>{render}</TouchableOpacity>;
};

export default CardProduct;
