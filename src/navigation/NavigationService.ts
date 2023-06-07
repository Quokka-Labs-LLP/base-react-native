import * as React from 'react';

import { DrawerActions, CommonActions, NavigationContainerRef, NavigationState, ParamListBase } from '@react-navigation/native';

type RootParamList = ReactNavigation.RootParamList
const navigationRef = React.createRef<NavigationContainerRef<RootParamList>>();

const insertBeforeLast = (routeName: string, params: any) => (state: NavigationState) => {
  const routes = [
    ...state.routes.slice(0, -1),
    { name: routeName, params },
    state.routes[state.routes.length - 1],
  ];

  return CommonActions.reset({
    ...state,
    routes,
    index: routes.length - 1,
  });
};

function navigate(name: never | string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function resetRoot(name: string) {
  return navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name }],
  });
}

function getRootState() {
  return navigationRef.current?.getRootState();
}

function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

function getCurrentOptions() {
  return navigationRef.current?.getCurrentOptions();
}

function goBack() {
  return navigationRef.current?.goBack();
}

function goCanBack() {
  return navigationRef.current?.canGoBack();
}

function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

function jumpTo(screen: string) {
  navigationRef.current?.dispatch(DrawerActions.jumpTo(screen));
}

function insertBeforeLastHelper(routeName: string, params: any) {
  navigationRef.current?.dispatch(insertBeforeLast(routeName, params));
}


export default {
  getCurrentRoute,
  getCurrentOptions,
  getRootState,
  navigate,
  goBack,
  goCanBack,
  openDrawer,
  closeDrawer,
  resetRoot,
  jumpTo,
  insertBeforeLastHelper,
  navigationRef,
};
