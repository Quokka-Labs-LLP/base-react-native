import React, { ReactNode } from 'react'

import {
  View,
  ViewStyle,
  TextStyle,
} from 'react-native'

import MText from '~components/Text';

import { Colors } from '~styles';

type fontSizeType = 18 | 24 | 28 | number;
export interface Props {
  children?: ReactNode | ReactNode[];
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  size?: fontSizeType;
  color?: string;
}

export const Title = ({ children, color, size, style, textStyle }: Props) => {
  return (
    <View style={style}>
      <MText
        style={[
          { color, fontSize: size },
          textStyle ? textStyle : {},
        ]}>
        {children}
      </MText>
    </View>
  )
};

export default Title;

Title.defaultProps = {
  size: 18,
  fontWeight: 'bold',
  color: Colors.black,
}