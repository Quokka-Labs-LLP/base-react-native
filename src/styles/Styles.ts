import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Size from './Size';
import { h, w } from '../utils/ui/WHNormalizer';


const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    paddingHorizontal: Size.l,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_space: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexWrap: { flexWrap: 'wrap' },
  flexColumn: {
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  aliSelfCenter: {
    alignSelf: 'center',
  },
  aliSelfEnd: {
    alignSelf: 'flex-end',
  },
  justifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: w(6.1),
    color: Colors.text,
  },
  subTitle: {
    color: Colors.subText,
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  textAlignLeft: {
    textAlign: 'right',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  verticalMarginMin: {
    marginVertical: Size.vs,
  },
  verticalMargin: {
    marginVertical: Size.s,
  },
  verticalMarginM: {
    marginVertical: Size.m,
  },
  verticalMarginMax: {
    marginVertical: Size.l,
  },
  horizontalMargin: {
    marginHorizontal: Size.s,
  },
  horizontalMarginM: {
    marginHorizontal: Size.m,
  },
  horizontalMarginL: {
    marginHorizontal: Size.l,
  },
  marginTop: { marginTop: Size.s },
  marginTopMid: { marginTop: Size.m },
  marginTopMax: { marginTop: Size.l },
  marginTopML: { marginTop: Size.ml },
  marginTopXL: { marginTop: Size.xl },
  marginBottom: { marginBottom: Size.s },
  marginBottomMid: { marginBottom: Size.m },
  marginBottomMax: { marginBottom: Size.l },
  verticalPadding: {
    paddingVertical: Size.s,
  },
  verticalPaddingM: {
    paddingVertical: Size.m,
  },
  verticalPaddingMax: {
    paddingVertical: Size.l,
  },
  paddingHorizontal: { paddingHorizontal: Size.s },
  paddingHorizontalM: { paddingHorizontal: Size.m },
  paddingHorizontalX: { paddingHorizontal: Size.l },
  paddingTop: { paddingTop: Size.s },
  paddingTopMax: { paddingTop: h(4) },
  paddingBottom: { paddingBottom: Size.s },
  paddingBottomL: { paddingBottom: Size.m },
  paddingBottomMax: { paddingBottom: Size._l },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.gray5,
    marginVertical: Size.s,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.border,
    marginVertical: Size.s12,
  },
  boldText: {
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
  contentContainerStyle2: {
    paddingBottom: 200,
  },
  error: {
    color: Colors.red,
    paddingHorizontal: 2,
    paddingVertical: Size.vs,
    fontSize: Size.s12,
  },
  tabIndicator: {
    width: Size.vl,
    height: Size._vs,
    borderRadius: Size.s,
    alignSelf: 'center',
    backgroundColor: Colors.gray4,
    marginBottom: Size.l,
    marginTop: Size.xs,
  },
  headerTitle: {
    fontSize: Size.m,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Size.l,
  },
  btn: {
    marginBottom: Size.s,
    marginHorizontal: Size.xl,
  },
  absWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  elevatedContainer: {
    elevation: Size.vs,
    shadowColor: Colors.dark,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default Styles;
