import React from 'react'

import { View, ViewStyle } from 'react-native'

import styles from './styles';

export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

export const SpaceBetweenRow = ({
  children,
  backgroundColor,
  style,
}: Props) => {
  return (
    <View style={[styles.spaceBetweenRow, { backgroundColor }, style]}>
      {children}
    </View>
  )
};

export default SpaceBetweenRow