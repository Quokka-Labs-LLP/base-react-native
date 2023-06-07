import Toast, { ToastShowParams } from 'react-native-toast-message'

type toastType = 'success' | 'error' | 'info';
export const ShowToast = (type: toastType, title?: string, msg?: string) => {
  const options: ToastShowParams = {
    type,
    text1: title,
    text2: msg,
    position: 'top',
  }
  Toast.show(options);
};
