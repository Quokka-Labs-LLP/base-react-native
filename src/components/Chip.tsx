import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Icon, Icons } from './Icon';
import MText from './Text';
import { Row } from './Wrapper';

import { Colors, Size } from '~styles';

interface ChipProps {
  name: string;
  onPress: () => void;
}
const Chip = ({ name, onPress }: ChipProps) => {
  return (
    <Row style={styles.container}>
      <MText>{name}</MText>
      <TouchableOpacity onPress={onPress}>
        <Icon type={Icons.AntDesign} name='close' size={Size.m} />
      </TouchableOpacity>
    </Row>
  )
}


export default Chip

const styles = StyleSheet.create({
  container: {
    borderRadius: Size.vs,
    backgroundColor: Colors.gray3,
    padding: Size.vs,
    marginRight: Size.xs,
    marginBottom: Size.xs,
  },
})