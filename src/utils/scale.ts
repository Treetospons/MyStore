import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const [SCREEN_WIDTH, SCREEN_HEIGHT] =
  width < height ? [width, height] : [height, width];

const BASE_WIDTH = 430;
const BASE_HEIGHT = 932;

export const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size;

export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / BASE_HEIGHT) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const responsiveFontSize = (fontSize: number) => {
  const ratio = fontSize * (SCREEN_WIDTH / BASE_WIDTH);
  return Math.round(PixelRatio.roundToNearestPixel(ratio));
};
