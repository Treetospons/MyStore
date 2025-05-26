type TFontFamily = Record<
  'bold' | 'semibold' | 'medium' | 'regular' | 'thin',
  string
>;

export const FontFamily: TFontFamily = {
  bold: 'Font-Bold',
  semibold: 'Font-SemiBold',
  medium: 'Font-Medium',
  regular: 'Font-Regular',
  thin: 'Font-Thin',
};
