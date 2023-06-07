import React, { useState } from "react";

import moment from 'moment';
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from "react-native-modal-datetime-picker";

import MText from "./Text";

import Size from "~constants/Size";
import { Colors } from "~styles";
import Styles from "~styles/Styles";
import { w } from "~utils/ui/WHNormalizer";

export default function TimePicker(props: any) {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [initialTime, setInitialTime] = useState(props.initialTime)

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time: any) => {
    setInitialTime(moment(time).format("YYYY-MM-DD"))
    props.onTimeSelected(moment(time).format("YYYY-MM-DD"));
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showTimePicker}>
        <View style={[styles.inputContainer]}>
          <MText style={initialTime != '' ? props.clear ? styles.input : styles.inputBlack : styles.input}>
            {initialTime != ''
              ? props.clear ? props.heading : initialTime
              : props.clear ? props.heading : props.placeholderText
            }
          </MText>
        </View>
      </TouchableOpacity>
      {props?.error?.length !== 0 && <MText style={styles.errorMsg}>{props.error} !</MText>}
      <DateTimePicker
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        maximumDate={props?.maximumDate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Size.s,
    marginBottom: Size.xs,
  },
  containerBig: {
    fontSize: Size.s14,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    height: w(12),
    borderColor: Colors.gray4,
    // paddingHorizontal: 6,
    ...Styles.justifyCenter,
    borderRadius: 6
  },
  input: {
    padding: Size.s,
    color: Colors.subText,
    fontSize: Size.s14,
  },
  inputBlack: {
    padding: Size.s,
    color: Colors.black,
    fontSize: Size.s14
  },
  errorMsg: {
    fontSize: Size.s14,
    color: Colors.red,
    marginTop: 1
  },
});