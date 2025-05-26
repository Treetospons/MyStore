type Palettes = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type PrimaryKey = `primary${Palettes}`;
type SecondaryKey = `secondary${Palettes}`;

type ColorPalette = {
  [key in PrimaryKey]?: string;
} & {
  [key in SecondaryKey]?: string;
} & {
  white: string;
  transparent: string;
};

export const Light: ColorPalette = {
  primary100: '#8E6CEF',
  secondary100: '#8E6CEF',
  white: '#FFFFFF',
  transparent: 'transparent',
};
