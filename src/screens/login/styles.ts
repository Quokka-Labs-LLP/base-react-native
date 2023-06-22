import { StyleSheet } from "react-native";

import fonts from "~assets/fonts";

import Size from "~constants/Size";
import { Colors } from "~styles";
import Styles from "~styles/Styles";
import typography from "~styles/typography";
import { h } from "~utils/ui/WHNormalizer";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  rowLine: { flexDirection: 'row', alignItems: 'center' },
  mainWrapper: {
    flex: 1,
    marginHorizontal: '5%',
    width: '90%',
  },
  titleWrapper: {
  },
  titleLeft: {
    fontSize: Size.ml,
    color: Colors.gray9,
    fontFamily: fonts.ProximaNovaBold,
    marginRight: Size.xs,
  },
  titleRightWrapper: {
    width: '30%',
  },
  titleRight: {
    textAlign: 'right',
    color: Colors.primary,
  },
  subtitleWrapper: {
    marginBottom: Size.s12,
  },
  subtitleText: {
    fontSize: Size.s12,
    color: Colors.black
  },
  mobileWrapper: {
    height: typography.LINE_HEIGHT_50,
    flexDirection: 'row',
    paddingHorizontal: Size.s,
    backgroundColor: Colors.white,
    borderColor: Colors.gray9,
    borderWidth: Size._vvs,
    borderRadius: Size.s,
  },
  countryFlagCodeWrapper: { flexDirection: 'row' },
  countryIcon: {
    alignSelf: 'center',
    fontSize: Size.m - 2,
    color: Colors.gray9,
    marginRight: Size.vs
  },
  verticalSeperator: {
    marginLeft: 2,
    height: '70%',
    width: 1,
    backgroundColor: '#909090',
    alignSelf: 'center',
  },
  inputField: {
    paddingLeft: Size.s,
    fontSize: Size.m - 2,
  },
  errorMsg: {
    fontSize: Size.s12,
    color: Colors.danger,
  },
  buttonWrapper: {
    marginTop: Size.m,
    marginBottom: Size.s,
  },
  buttonTitle: {
    fontSize: Size.m,
    color: Colors.white,
  },
  termPolicyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  termPolicyText: {
    fontSize: Size.m,
    color: Colors.darkText,
  },
  termPolicyTextUnderline: {
    textDecorationLine: 'underline',
    fontSize: Size.s,
    color: Colors.primary,
  },
  separatorWrapper: {
    ...Styles.rowView,
    marginVertical: Size.l
  },
  separatorLine: {
    height: h(0.2),
    flex: 4.5,
    backgroundColor: Colors.gray4
  },
  separatorText: {
    textAlign: 'center',
    flex: 0.5,
  },
  // userSwitchTextWrapper: {
  //   ...Styles.aliSelfCenter,
  //   borderRadius: Size.xs,
  //   borderColor: Colors.primary,
  //   borderWidth: Size._xs / 10,
  //   width: "95%",
  //   height: h(5.7),
  //   ...Styles.centered,
  // },
  mobilenumberTitle: {
    fontSize: Size.m,
    lineHeight: Size.l - 2,
  },
  userSwitchText: {
    color: Colors.primary,
    textTransform: 'capitalize'
  },
  iconStyles: { alignSelf: 'center' }
});