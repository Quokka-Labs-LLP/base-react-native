import React from 'react'

import { View, ViewStyle } from 'react-native'

import styles from './styles';

export interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

export const SpaceAroundRow = ({
  children,
  backgroundColor,
  style,
}: Props) => {
  return (
    <View style={[styles.spaceAround, { backgroundColor }, style]}>
      {children}
    </View>
  )
};

export default SpaceAroundRow