import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { AppNavigator } from './app';
import { AuthNavigator } from './auth';
import NavigationService from './NavigationService';

import { Container } from '~components';
import { useAppSelector } from '~hooks/redux';
import { Colors } from '~styles';

const RootNavigator = () => {
  const accessToken = useAppSelector(s => s.auth)

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }, [])

  useEffect(() => {
  }, [])

  return (
    <Container>
      <StatusBar backgroundColor={Colors.primary} />
      <NavigationContainer ref={NavigationService.navigationRef}>
        {accessToken ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
})

export default RootNavigator;