import { CardStyleInterpolators } from '@react-navigation/stack'

export const StackConfig: any = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

export const ScaleStackConfig: any = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
}

export const ModalStack: any = {
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'vertical',
  gestureResponseDistance: 150,
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};
