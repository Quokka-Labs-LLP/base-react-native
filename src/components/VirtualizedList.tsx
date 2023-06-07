import React from 'react'

import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { FlatList, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated';

type Props = {
  children: React.ReactNode | React.ReactElement;
  style?: ViewStyle | ViewStyle[];
  onScroll?:
  | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
  | undefined;
  scrollEventThrottle?: number;
  animated?: boolean;
  horizontal?: boolean;
}

function VirtualizedList({ children, style, onScroll, scrollEventThrottle, animated, horizontal }: Props) {
  if (animated) {
    return (
      <Animated.FlatList
        data={[]}
        onScroll={onScroll}
        horizontal={horizontal}
        scrollEventThrottle={scrollEventThrottle}
        keyExtractor={item => 'list'}
        ListFooterComponent={
          <View style={style}>{children}</View>
        }
        renderItem={({ item }) => {
          return null
        }}
      />
    )
  }
  return (
    <FlatList
      data={[]}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
      keyExtractor={item => 'list'}
      ListFooterComponent={
        <View style={style}>{children}</View>
      }
      renderItem={({ item }) => {
        return null
      }}
    />
  )
}

export default VirtualizedList