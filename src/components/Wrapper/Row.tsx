import React, { ReactNode } from 'react'

import { View, ViewStyle } from 'react-native'

import styles from './styles';

type justifyContentType =
  'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

export interface RowProps {
  children?: ReactNode | ReactNode[];
  style?: ViewStyle | ViewStyle[];
  justifyContent?: justifyContentType;
  backgroundColor?: string;
}

const Row = ({
  children,
  backgroundColor,
  style,
  justifyContent,
}: RowProps) => {
  return (
    <View style={[styles.row, { backgroundColor, justifyContent }, style]}>
      {children}
    </View>
  )
};

export default Row;