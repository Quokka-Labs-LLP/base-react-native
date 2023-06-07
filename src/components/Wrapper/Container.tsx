import React from 'react'

import { View } from 'react-native'

import styles from './styles';

export interface ContainerProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: object;
}

const Container = ({
  children,
  backgroundColor,
  style,
}: ContainerProps) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>{children}</View>
  )
};
export default Container;