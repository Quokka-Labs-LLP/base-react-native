import NetInfo from '@react-native-community/netinfo';

import logger from './logger';
import { showAndroidToast } from './ui/androidToast';

export const CheckInternetStatus = async () => {

  const netState = await NetInfo.fetch();
  const offlineError = 'Offline , Check Internet Status !'
  if (netState.isConnected) {
    return true;
  } else {
    logger(offlineError)
    showAndroidToast(offlineError, 'short', 'top')
    return false;
  }
}