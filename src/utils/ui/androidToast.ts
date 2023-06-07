import { ToastAndroid } from "react-native";

type gravity = 'top' | 'center' | 'bottom';
type duration = 'short' | 'long';

export const showAndroidToast = (msg: string, duration: duration, gravity?: gravity) => {
  let d = ToastAndroid.SHORT;
  if (duration === 'long') {
    d = ToastAndroid.LONG;
  }

  let g = ToastAndroid.BOTTOM;
  if (gravity === 'center') {
    g = ToastAndroid.CENTER;
  } else if (gravity === 'top') {
    g = ToastAndroid.TOP
  }
  ToastAndroid.showWithGravity(msg, d, g);
};