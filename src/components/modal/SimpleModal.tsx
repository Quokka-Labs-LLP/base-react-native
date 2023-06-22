import React from 'react'

import {
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

import Modal from 'react-native-modal'

import { Colors, Size } from '~styles';
import Styles from '~styles/Styles';

interface ModalProps {
  visible: boolean;
  setVisible: Function;
  children?: React.ReactNode;
  loading?: boolean;
  closeOnSubmit?: boolean;
  style?: ViewStyle;
  modalContainer?: ViewStyle;
  showIndicator?: boolean;
  dismiss?: boolean;
  animationIn?: "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble" | "bounceIn" | "bounceInDown" | "bounceInUp" | "bounceInLeft" | "bounceInRight" | "bounceOut" | "bounceOutDown" | "bounceOutUp" | "bounceOutLeft" | "bounceOutRight" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInUp" | "fadeInUpBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedIn" | "lightSpeedOut" | "slideInDown" | "slideInUp" | "slideInLeft" | "slideInRight" | "slideOutDown" | "slideOutUp" | "slideOutLeft" | "slideOutRight" | "zoomIn" | "zoomInDown" | "zoomInUp" | "zoomInLeft" | "zoomInRight" | "zoomOut" | "zoomOutDown" | "zoomOutUp" | "zoomOutLeft" | "zoomOutRight";
  animationOut?: "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble" | "bounceIn" | "bounceInDown" | "bounceInUp" | "bounceInLeft" | "bounceInRight" | "bounceOut" | "bounceOutDown" | "bounceOutUp" | "bounceOutLeft" | "bounceOutRight" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInUp" | "fadeInUpBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedIn" | "lightSpeedOut" | "slideInDown" | "slideInUp" | "slideInLeft" | "slideInRight" | "slideOutDown" | "slideOutUp" | "slideOutLeft" | "slideOutRight" | "zoomIn" | "zoomInDown" | "zoomInUp" | "zoomInLeft" | "zoomInRight" | "zoomOut" | "zoomOutDown" | "zoomOutUp" | "zoomOutLeft" | "zoomOutRight";
  animationInTiming?: number;
  animationOutTiming?: number;
}
const SimpleModal = ({
  children,
  visible,
  setVisible,
  closeOnSubmit,
  style,
  modalContainer,
  showIndicator,
  dismiss,
  animationIn,
  animationOut,
  animationInTiming,
  animationOutTiming,
}: ModalProps) => {

  const onClose = () => {
    closeOnSubmit && setVisible(false)
  };

  return (
    <Modal
      isVisible={visible}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      backdropOpacity={0.4}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      onBackdropPress={() => dismiss ? setVisible(false) : null}
      onDismiss={onClose}
      style={[styles.modalContainer, modalContainer]}>
      <View style={[styles.modal, style]}>
        {showIndicator && <View style={Styles.tabIndicator} />}
        {children}
      </View>
    </Modal>
  )
};

SimpleModal.defaultProps = {
  visible: false,
  showIndicator: false,
  animationIn: 'slideInUp',
  // animationOut: 'slideInDown',
  // animationInTiming:,
  // animationOutTiming:
  // setVisible: ,
  // children: ,
}

export default SimpleModal

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    width: '100%',
    paddingHorizontal: Size.l + Size.xs,
    paddingBottom: Size.s,
    paddingTop: Size.xs,
    borderTopLeftRadius: Size.l,
    borderTopRightRadius: Size.l,
    backgroundColor: Colors.background,
  },
});
