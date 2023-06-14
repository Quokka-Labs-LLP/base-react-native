import React from 'react'

import { StyleSheet, View, ViewStyle } from 'react-native'

import Skeleton from './Skeleton';

import { Colors } from '~styles';
import Styles from '~styles/Styles';

interface CircleProps {
  size: number;
  background?: string;
  children?: React.ReactNode | null;
  loading?: boolean;
  skBg?: string;
  style?: ViewStyle | ViewStyle[];
}

const Circle = ({ loading, size, background, children, skBg, style }: CircleProps) => {
  if (loading) {
    return <Skeleton height={size} width={size} borderRadius={size / 2} background={skBg} />
  }
  return (
    <View style={[styles.circle, {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: background ? background : styles.circle.backgroundColor,
    }, style]}>
      {children}
    </View>
  )
}

export default Circle

const styles = StyleSheet.create({
  circle: {
    backgroundColor: Colors.primary,
    ...Styles.centered,
  },
})