import { StyleSheet } from "react-native";

import { fonts } from "~assets";
import { Size } from "~constants";
import { wWidth } from "~constants/Size";

import { Colors, Styles } from "~styles";
import typography from "~styles/typography";
import { h, w } from "~utils";

export default StyleSheet.create({
  container: {
  },
  header: {
  },
  headerTop: {
    height: h(18),
    backgroundColor: Colors.gray4,
  },
  headerBottom: {
    top: -Size.vl,
    alignItems: 'center',
  },
  headerImg: {
    width: wWidth,
    height: h(18),
  },
  avatar: {
    backgroundColor: Colors.primary200,
  },
  name: {
    fontSize: Size.l,
    fontFamily: fonts.ProximaNovaBold,
    marginTop: Size.s12,
    marginBottom: Size.xs,
  },
  logoutBtn: {
    margin: Size.l,
  },
  cardContainer: {
    paddingHorizontal: Size.m,
    top: -Size.xl,
  },
  card: {
    ...Styles.elevatedContainer,
    paddingHorizontal: Size.s,
    borderRadius: Size.s12,
  },
  item: {
    paddingHorizontal: Size.s,
    paddingVertical: Size.xs,
    marginVertical: Size.s,
  },

  // my listing
  myListingContainer: {
    paddingHorizontal: Size.m,
    backgroundColor: Colors.primary25,
  },
  listingItem: {
    ...Styles.row_space,
    borderRadius: Size.s,
    ...Styles.elevatedContainer,
    marginBottom: Size.s,
    padding: Size.s,
  },
  listImgContainer: {
    // marginRight: Size.m,
  },
  listImage: {
    width: w(26),
    height: w(28),
    backgroundColor: Colors.gray2,
    borderRadius: Size.vs,
  },
  status: {
    position: 'absolute',
    padding: Size.s,
    backgroundColor: Colors.red,
    borderRadius: Size.l,
    margin: Size.s12 / 2,
  },
  rightContainer: {
    flex: 1,
    paddingTop: Size.s,
    paddingHorizontal: Size.m,
  },
  manageBtn: {
    width: '55%',
    height: h(4),
    marginTop: Size.m,
  },
  manageBtnStyles: {
    fontSize: Size.s14,
    fontFamily: fonts.ProximaNovaRegular,
  },
  listingHeader: {
    height: h(6),
    paddingVertical: Size.vs,
    paddingLeft: Size.m,
    paddingRight: Size.s,
    backgroundColor: Colors.white,
  },
  horizontalBtn: {
    height: h(4),
    marginRight: Size.s12,
    marginTop: Size.xs,
    marginBottom: Size.s,
    borderRadius: Size.xs,
  },

  loginBtn: {
    marginBottom: Size.vl * 2,
  },
});