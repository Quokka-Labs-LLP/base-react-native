import React from 'react';

import { ViewStyle } from 'react-native'

import { Colors, Size } from '~styles';

export interface IconProps {
  type: Function;
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
}

const Icon = ({ type, name, color, size, style = {} }: IconProps) => {
  const Tag = type;
  if (type) {
    return <Tag name={name} size={size} color={color} style={style} />
  }
  return null;
};

Icon.defaultProps = {
  color: Colors.text,
  size: Size.ml,
}

export default Icon;
