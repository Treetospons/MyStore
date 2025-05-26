import React, {ReactNode} from 'react';
import {
  FlexAlignType,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {colors, spacing} from '~/themes';

export type TCard = {
  width?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: FlexAlignType;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  rounded?: keyof typeof spacing.Spacing;
  borderColor?: keyof typeof colors.Light;
  backgroundColor?: keyof typeof colors.Light;
  style?: TextStyle;
  children?: ReactNode;
} & ViewProps;

const Card = ({
  width,
  flexDirection,
  alignItems,
  justifyContent,
  rounded,
  borderColor,
  backgroundColor,
  style,
  children,
  ...props
}: TCard) => {
  const CardStyles: ViewStyle[] = [
    {
      width: width,
      justifyContent,
      alignItems,
      flexDirection,
      padding: spacing.Spacing.md,
      borderRadius: rounded ? spacing.Spacing[rounded] : 0,
      borderWidth: 1,
      borderColor: colors.Light[borderColor ?? 'white'],
      backgroundColor: colors.Light[backgroundColor ?? 'white'],
      overflow: 'hidden',
    },
    style ?? {},
  ];

  return (
    <View {...props} style={CardStyles}>
      {children}
    </View>
  );
};

export default Card;
