import React, {ReactNode} from 'react';
import {FlexAlignType, View, ViewProps, ViewStyle} from 'react-native';
import useTheme from '~/hooks/useTheme';
import {colors, spacing} from '~/themes';

type TPadding = Record<'p' | 'pv' | 'ph' | 'pt' | 'pb' | 'pl' | 'pr', string>;

type TMargin = Record<'m' | 'mv' | 'mh' | 'mt' | 'mb' | 'ml' | 'mr', string>;

export type TBox = {
  [K in keyof TPadding]?: keyof typeof spacing.Spacing;
} & {
  [K in keyof TMargin]?: keyof typeof spacing.Spacing;
} & {
  flex?: number;
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
  backgroundColor?: keyof typeof colors.Light & keyof typeof colors.Dark;
  style?: ViewStyle;
  children?: ReactNode;
} & ViewProps;

const Box = ({
  p,
  pt,
  pb,
  pl,
  pr,
  pv,
  ph,
  m,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  rounded,
  backgroundColor,
  style,
  children,
  ...props
}: TBox) => {
  const {appTheme} = useTheme();

  const getMargin = () => {
    const obj: ViewStyle = {};

    if (m) {
      obj.margin = spacing.Spacing[m];
      return obj;
    }

    if (mt) {
      obj.marginTop = spacing.Spacing[mt];
    }

    if (mb) {
      obj.marginBottom = spacing.Spacing[mb];
    }

    if (ml) {
      obj.marginLeft = spacing.Spacing[ml];
    }

    if (mr) {
      obj.marginRight = spacing.Spacing[mr];
    }

    if (mv) {
      obj.marginVertical = spacing.Spacing[mv];
    }

    if (mh) {
      obj.marginHorizontal = spacing.Spacing[mh];
    }

    return obj;
  };

  const getPadding = () => {
    const obj: ViewStyle = {};

    if (p) {
      obj.padding = spacing.Spacing[p];
      return obj;
    }

    if (pt) {
      obj.paddingTop = spacing.Spacing[pt];
    }

    if (pb) {
      obj.paddingBottom = spacing.Spacing[pb];
    }

    if (pl) {
      obj.paddingLeft = spacing.Spacing[pl];
    }

    if (pr) {
      obj.paddingRight = spacing.Spacing[pr];
    }

    if (pv) {
      obj.paddingVertical = spacing.Spacing[pv];
    }

    if (ph) {
      obj.paddingHorizontal = spacing.Spacing[ph];
    }

    return obj;
  };

  const BoxStyles: ViewStyle[] = [
    {
      flex,
      justifyContent,
      alignItems,
      flexDirection,
      borderRadius: rounded ? spacing.Spacing[rounded] : 0,
      backgroundColor: colors[appTheme][backgroundColor ?? 'transparent'],
    },
    getMargin(),
    getPadding(),
    style ?? {},
  ];

  return (
    <View {...props} style={BoxStyles}>
      {children}
    </View>
  );
};

export default Box;
