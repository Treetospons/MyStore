import {responsiveFontSize} from '~/utils/scale';

type TFontSize = Record<
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  number
>;

export const FontSize: TFontSize = {
  xxs: responsiveFontSize(10),
  xs: responsiveFontSize(12),
  sm: responsiveFontSize(14),
  md: responsiveFontSize(16),
  lg: responsiveFontSize(18),
  xl: responsiveFontSize(20),
  xxl: responsiveFontSize(24),
};
