import { Colors } from "../styles";

export const changeHeaderBackground = (navigation: any, color?: string) => {
  navigation.setOptions({
    headerStyle: { backgroundColor: color ? color : Colors.background },
  });
}

export const randomKey = '' + (Math.floor(new Date().getTime()) / Math.random());

export const dummyArray = (num?: number) => new Array(num || 10).fill('');
