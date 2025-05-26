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

export const Dark: ColorPalette = {
  primary100: '#000000',
  secondary100: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
};
