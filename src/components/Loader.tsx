import React from 'react';

import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';

import { Size } from '~styles';

interface Props {
  loading: boolean
}
const Loader = ({ loading }: Props) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  else
    return null
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.l
  },
});

export default Loader;