import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native';
import { DefaultTFuncReturn } from 'i18next';
import { StyleSheet, TextInput, View, ViewStyle, KeyboardType, Text, ReturnKeyTypeOptions, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable';

import { Icon, Icons } from './Icon';
import MText from './Text';

import { Colors, Size } from '~styles';
import Styles from '~styles/Styles';
import { logger } from '~utils';
import { w } from '~utils/ui/WHNormalizer';

type autoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;
interface InputProp {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string | DefaultTFuncReturn;
  onBlur?: (value: any) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<any>;
  inputContainer?: ViewStyle | ViewStyle[];
  inputStyle?: ViewStyle | ViewStyle[];
  keyboardType?: KeyboardType;
  onPress?: (value: any) => void;
  error?: string | DefaultTFuncReturn;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number | undefined;
  editable?: boolean;
  autoCapitalize?: autoCapitalize;
  textContentType?: textContentType;
  multiline?: boolean;
  onPressButton?: () => void;
  buttonText?: string;
  showButton?: boolean;
}

const InputBox = ({
  inputRef,
  value,
  onChangeText,
  placeholder,
  onBlur,
  onFocus,
  inputContainer,
  inputStyle,
  keyboardType,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  maxLength,
  onPress,
  error,
  editable,
  autoCapitalize,
  textContentType,
  multiline,
  onPressButton,
  buttonText,
  showButton,
}: InputProp) => {
  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false);

  const borderColor = error ? Colors.red :
    focused ? Colors.primary : Colors.gray3;
  const color = theme.colors.text;

  // const isCallable = typeof onPressButton === 'function';
  // logger(isCallable, typeof onPressButton)
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <TextInput
        style={[
          styles.input,
          { borderColor, color },
          inputStyle,
        ]}
        onPressIn={onPress}
        ref={inputRef}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder || ''}
        placeholderTextColor={Colors.subText}
        defaultValue={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={() => {
          onFocus && onFocus()
          setFocused(true)
        }}
        maxLength={maxLength}
        multiline={multiline}
        editable={editable}
        onBlur={(e) => {
          onBlur && onBlur(e)
          setFocused(false)
        }}
        onSubmitEditing={() => {
          onSubmitEditing && onSubmitEditing()
          setFocused(false)
        }}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        textContentType={textContentType}
      />

      {showButton && <TouchableOpacity
        onPress={onPressButton}
        style={styles.absButton}>
        <MText marginHorizontal={Size.s}>{buttonText}</MText>
        <Icon type={Icons.Feather} name='chevron-down' />
      </TouchableOpacity>}

      {!!error && <Animatable.View animation="fadeInRight" duration={300}>
        <MText style={Styles.error}>{error}</MText>
      </Animatable.View>}
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  input: {
    padding: Size.s,
    borderWidth: 2,
    borderRadius: Size.s12,
    color: Colors.dark,
    height: w(12),
    fontSize: Size.s14,
  },
  inputContainer: {
    marginVertical: Size.s,
    width: "100%"
  },
  errorMsg: {
    fontSize: Size._12,
    color: Colors.red,
    marginTop: 1
  },
  absButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: Size.s12,
    ...Styles.rowView,
  },
})
