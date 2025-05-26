import React from 'react';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {spacing} from '~/themes';

type TImage = {
  width?: number;
  height?: number;
  rounded?: keyof typeof spacing.Spacing;
  style?: ImageStyle;
} & FastImageProps;

const Image = ({width, height, rounded, style, ...props}: TImage) => {
  const FastImageStypes: ImageStyle[] = [
    {
      width,
      height,
      borderRadius: rounded ? spacing.Spacing[rounded] : 0,
    },
    style ?? {},
  ];
  return <FastImage {...props} style={FastImageStypes} />;
};

export default Image;
