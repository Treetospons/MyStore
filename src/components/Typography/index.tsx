import React, {ReactNode} from 'react';
import {Text, TextStyle, TextProps, ViewStyle} from 'react-native';
import {colors, fonts, spacing} from '~/themes';

type TMargin = Record<'m' | 'mv' | 'mh' | 'mt' | 'mb' | 'ml' | 'mr', string>;

type TTypography = {
  [K in keyof TMargin]?: keyof typeof spacing.Spacing;
} & {
  size?: keyof typeof fonts.FontSize;
  color?: keyof typeof colors.Light;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify';
  variant?: keyof typeof fonts.FontFamily;
  style?: TextStyle;
  children?: ReactNode;
} & TextProps;

const Typography = ({
  m,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  size,
  color,
  textAlign,
  variant,
  style,
  children,
  ...props
}: TTypography) => {
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

  const TextStyles: TextStyle[] = [
    {
      color: colors.Light[color ?? 'primary100'],
      textAlign,
      fontSize: fonts.FontSize[size ?? 'md'],
      fontFamily: fonts.FontFamily[variant ?? 'regular'],
    },
    getMargin(),
    style ?? {},
  ];

  return (
    <Text {...props} style={TextStyles}>
      {children}
    </Text>
  );
};

export default Typography;
