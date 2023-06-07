import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native';
import { DefaultTFuncReturn } from 'i18next';
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { ReturnKeyTypeOptions } from 'react-native';
import { KeyboardType } from 'react-native';
import { ViewStyle } from 'react-native';

import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { TextInput } from 'react-native-paper'

import { Icon, Icons } from './Icon';
import MText from './Text';

import fonts from '~assets/fonts';
import Size from '~constants/Size';
import { Colors } from '~styles';
import Styles from '~styles/Styles';




import { w } from '~utils/ui/WHNormalizer';

type autoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;
interface InputProp {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string | DefaultTFuncReturn;
  onBlur?: (value: any) => void;
  onFocus?: () => void;
  inputRef?: React.Ref<any>;
  inputContainer?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
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

const PaperInput = ({
  inputRef,
  value,
  onChangeText,
  placeholder,
  onBlur,
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
  const [focused, setFocused] = useState<boolean>(false)

  const borderColor = error ? Colors.red : focused ? Colors.primary : Colors.gray4;
  const color = focused ? theme.colors.text : theme.colors.subText;
  const inputTheme = {
    roundness: Size.s12,
    colors: {
      primary: Colors.primary,
      text: inputStyle?.color ? inputStyle.color : theme.colors.text,
      onSurfaceVariant: Colors.subText
    },
  }

  return (
    <View style={styles.inputContainer}>
      <View style={inputContainer}>
        <TextInput
          ref={inputRef}
          mode='outlined'
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          label={placeholder}
          theme={inputTheme}
          textColor={color}
          style={[styles.input, {
            backgroundColor: theme.colors.background,
            // color,
          }, inputStyle]}
          onPressIn={onPress}
          autoCapitalize={autoCapitalize}
          defaultValue={value}
          onFocus={() => setFocused(true)}
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
          textContentType={textContentType}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          error={!!error}
          outlineStyle={{ borderColor }}
        />

        {showButton && <TouchableOpacity
          onPress={onPressButton}
          style={styles.absButton}>
          <MText marginHorizontal={Size.s}>{buttonText}</MText>
          <Icon type={Icons.Feather} name='chevron-down' />
        </TouchableOpacity>}
      </View>
      {!!error && <Animatable.View animation="fadeIn" duration={500}
        style={Styles.rowView}>
        <Icon type={Icons.MaterialCommunityIcons} name='alert' color={Colors.red} size={Size.m} />
        <MText marginHorizontal={Size.vs} style={Styles.error}>{error}</MText>
      </Animatable.View>}
    </View>

  )
}

export default PaperInput

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: Size.s,
    width: "100%"
  },
  input: {
    fontSize: Size.s14,
    // height: w(12),
  },
  errorMsg: {
    fontSize: Size._12,
    color: Colors.red,
    marginTop: 1
  },
  absButton: {
    position: 'absolute',
    top: Size.vs,
    bottom: 0,
    right: Size.s12,
    ...Styles.rowView,
    // backgroundColor: 'yellow'
  },
})