import React from 'react';
import {View, ViewStyle} from 'react-native';
import useTheme from '~/hooks/useTheme';
import {colors, spacing} from '~/themes';

export type TGap = {
  width?: keyof typeof spacing.Spacing | number;
  height?: keyof typeof spacing.Spacing | number;
  backgroundColor?: keyof typeof colors.Light & keyof typeof colors.Dark;
  style?: ViewStyle;
};

const Gap = ({width, height, backgroundColor, style, ...props}: TGap) => {
  const {appTheme} = useTheme();

  const GapStyles: ViewStyle[] = [
    {
      width: typeof width === 'string' ? spacing.Spacing[width] : width,
      height: typeof height === 'string' ? spacing.Spacing[height] : height,
      backgroundColor: colors[appTheme][backgroundColor ?? 'transparent'],
    },
    style ?? {},
  ];

  return <View {...props} style={GapStyles} />;
};

export default Gap;
