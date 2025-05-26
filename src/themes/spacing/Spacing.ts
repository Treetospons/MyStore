import {moderateScale} from '~/utils/scale';

type TSpacing = Record<
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  number
>;

export const Spacing: TSpacing = {
  xxs: moderateScale(4),
  xs: moderateScale(8),
  sm: moderateScale(12),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(28),
};
