import { Dimensions, PixelRatio } from "react-native";

export const widthPercentageToDP = (widthPercent: string | number) => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent + '');
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
}
export const heightPercentageToDP = (heightPercent: string | number) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent + '');
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}

export const h = (value: string | number) => heightPercentageToDP(value);
export const w = (value: string | number) => widthPercentageToDP(value);
