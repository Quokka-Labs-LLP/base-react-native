import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

import Colors from './Colors';
// import { DarkTheme as PaperDarkTheme } from 'react-native-paper'

export const MyLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.light,
    text: Colors.text,
    subText: Colors.subText,
    icon: Colors.dark,
    border: Colors.gray4,
    notification: Colors.success,
    disabled: Colors.gray4,
    danger: Colors.danger,
    accent: Colors.accent,
    tertiary: Colors.tertiary,
  },
};

export const MyDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.dark,
    card: Colors.black,
    text: Colors.textLight,
    subText: Colors.subText,
    icon: Colors.light,
    border: Colors.gray4,
    notification: Colors.success,
    disabled: Colors.gray4,
    danger: Colors.danger,
    accent: Colors.accent,
    tertiary: Colors.tertiary,
  },
};

