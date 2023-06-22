import React from 'react'

import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

import { Icon, Icons } from './Icon';

import MText from './Text';

import fonts from '~assets/fonts';
import { Colors, Size } from '~styles';
import Styles from '~styles/Styles';
import { h, w } from '~utils/ui/WHNormalizer';

type textAlign = 'center' | 'left' | 'right';
const IconSize = w(5.4);
interface AppHeaderProps {
  title?: string;
  style?: ViewStyle;
  menu?: boolean;
  back?: boolean;
  left?: string;
  leftType?: Function;
  onPressLeft?: () => void;
  right?: string;
  rightType?: Function;
  onPressRight?: () => void;
  rightComponent?: React.ReactElement;
  headerBg?: string;
  iconColor?: string;
  titleAlight?: textAlign;
  optional?: string;
  optionalType?: Function;
  optionalBtnPress?: () => void;
  children?: React.ReactNode;
  testNetTag?: boolean;
}

const AppHeader = ({
  title,
  style,
  menu,
  back,
  left,
  leftType,
  onPressLeft,
  right,
  onPressRight,
  rightComponent,
  rightType,
  headerBg,
  iconColor,
  titleAlight,
  optional,
  optionalType,
  optionalBtnPress,
  children,
}: AppHeaderProps) => {
  const theme = useTheme();
  const color = theme.colors.text;
  const LeftView = () => (
    <View style={styles.view}>
      {(!!left && leftType) || menu || back ? (
        <TouchableOpacity onPress={onPressLeft}>
          <Icon
            type={leftType ? leftType : back ? Icons.AntDesign : Icons.Feather}
            name={left ? left : back ? "arrowleft" : "menu"}
            size={IconSize}
            color={iconColor || color}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  )
  const RightView = () =>
    rightComponent ? (
      rightComponent
    ) : (
      <View style={[styles.view, styles.rightView]}>
        {!!optional && optionalType && (
          <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
            <Icon
              type={optionalType}
              name={optional}
              size={IconSize}
              color={iconColor || color}
            />
          </TouchableOpacity>
        )}
        {!!right && (
          <TouchableOpacity onPress={onPressRight}>
            <Icon
              type={rightType ? rightType : Icons.Feather}
              name={right}
              size={IconSize}
              color={iconColor || color}
            />
          </TouchableOpacity>
        )}
      </View>
    )
  const TitleView = () => (
    <View style={styles.titleView}>
      <MText
        size={w(3.4)}
        color={iconColor || color}
        align={titleAlight}
        family={fonts.ProximaNovaRegular}>
        {title}
      </MText>
    </View>
  )

  return (
    <View style={[styles.header, { backgroundColor: headerBg }, style]}>
      <LeftView />
      <TitleView />
      <RightView />
    </View>
  )
};

export default AppHeader

AppHeader.defaultProps = {
  title: '',
  subTitle: '',
  onPressLeft: () => { },
  left: '',
  onPressRight: () => { },
  right: '',
  style: {},
  leftComponent: null,
  rightComponent: null,
  iconColor: Colors.text,
}

const styles = StyleSheet.create({
  header: {
    height: h(5.6),//45,
    ...Styles.row_space,
    paddingHorizontal: Size.xl,
    // backgroundColor: 'gray',
  },
  view: {
    alignItems: 'center',
    width: w(15),
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },
  button: {
    width: w(6),
    height: w(6),
    marginVertical: h(1),
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Size.l,
  },
  badgeStyles: {
    position: 'absolute',
    top: -5,
    right: -10
  },
  tagContainer: {
    height: h(5.6),
    position: 'absolute',
    left: 0,
    right: 0,
    alignSelf: 'center',
    ...Styles.centered,
  },
  testnetTag: {
    backgroundColor: Colors.primary,
    borderRadius: Size.s,
    paddingHorizontal: Size.s,
    paddingBottom: 2,
    alignSelf: 'center',
  },
  text: {
    // fontFamily: fonts.ProximaNovaRegular,
    color: Colors.background,
    fontSize: w(3.3),
  },
});
