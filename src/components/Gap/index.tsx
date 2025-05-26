import React from 'react';
import {View, ViewStyle} from 'react-native';
import {colors, spacing} from '~/themes';

export type TGap = {
  width?: keyof typeof spacing.Spacing | number;
  height?: keyof typeof spacing.Spacing | number;
  backgroundColor?: keyof typeof colors.Light;
  style?: ViewStyle;
};

const Gap = ({width, height, backgroundColor, style, ...props}: TGap) => {
  const GapStyles: ViewStyle[] = [
    {
      width: typeof width === 'string' ? spacing.Spacing[width] : width,
      height: typeof height === 'string' ? spacing.Spacing[height] : height,
      backgroundColor: backgroundColor,
    },
    style ?? {},
  ];

  return <View {...props} style={GapStyles} />;
};

export default Gap;
