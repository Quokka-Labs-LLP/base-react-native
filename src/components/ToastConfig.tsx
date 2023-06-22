import React from 'react';

import { StyleSheet } from 'react-native';
import { BaseToast, ErrorToast, InfoToast, ToastConfig } from 'react-native-toast-message';

import fonts from '../assets/fonts';

import { Colors, Size } from '~styles';
import { w } from '~utils/ui/WHNormalizer';

const toastConfig: ToastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.toast}
      contentContainerStyle={styles.contentContainer}
      text1Style={[styles.darkText, styles.boldText]}
      text2NumberOfLines={3}
      text2Style={[styles.darkText, styles.regText]}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={[styles.toast, {
        backgroundColor: Colors.red,
        borderLeftColor: Colors.red,
      }]}
      contentContainerStyle={styles.contentContainer}
      text1Style={[styles.liteText, styles.boldText]}
      text2NumberOfLines={3}
      text2Style={[styles.liteText, styles.regText]}
    />
  ),

  info: (props: any) => (
    <InfoToast
      {...props}
      style={[styles.toast, {
        paddingVertical: Size.s,
        borderLeftColor: Colors.primary,
      }]}
      contentContainerStyle={styles.contentContainer}
      text1Style={[styles.darkText, styles.boldText]}
      text2NumberOfLines={3}
      text2Style={[styles.darkText, styles.regText]}
    />
  )

  // tomatoToast: ({ text1, text2 }) => (
  //   <View style={{ height: 60, width: '100%' }}>
  //     <MText>{text1}</MText>
  //     <MText>{text2}</MText>
  //   </View>
  // )
};

export default toastConfig;

const styles = StyleSheet.create({
  toast: {
    height: 'auto',
    width: '90%',
  },
  contentContainer: {
    paddingVertical: Size.s,
    paddingHorizontal: Size.m,
  },
  liteText: {
    fontSize: w(3.5),
    color: Colors.white,
  },
  darkText: {
    fontSize: w(3.5),
    color: Colors.dark,
  },
  regText: { fontFamily: fonts.ProximaNovaRegular, },
  boldText: { fontFamily: fonts.ProximaNovaBold },
})