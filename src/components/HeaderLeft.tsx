import React from 'react'

import { useTheme } from '@react-navigation/native';
import { BackHandler, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'

import { Icon, Icons } from './Icon';

import NavigationService from '~navigation/NavigationService';
import { Size } from '~styles';
import Styles from '~styles/Styles';
import { h } from '~utils/ui/WHNormalizer';

interface HeaderProps {
  // title?: String;
  onPress?: () => void;
  iconType?: any;
  iconName?: string;
  style?: ViewStyle;
  color?: string;
  backgroundColor?: string;
}

const HeaderLeft = ({ iconType, iconName, onPress, color, backgroundColor, style }: HeaderProps) => {
  const onButtonPress = () => {
    onPress ? onPress() : (
      NavigationService.goCanBack() ? NavigationService.goBack() : BackHandler.exitApp()
    )
  }

  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <TouchableOpacity style={styles.button}
        onPress={onButtonPress}>
        <Icon
          type={iconType ? iconType : Icons.AntDesign}
          name={iconName ? iconName : NavigationService.goCanBack() ? 'arrowleft' : 'close'}
          color={color ? color : theme.colors.text}
        />
      </TouchableOpacity>
    </View>
  )
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    height: h(6),
    paddingHorizontal: Size.m,
    ...Styles.rowView,
  },
  button: {
    paddingHorizontal: Size.vs,
  },
});
