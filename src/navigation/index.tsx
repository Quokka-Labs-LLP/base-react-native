import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Platform } from 'react-native';
import Config from 'react-native-config';
import SplashScreen from 'react-native-splash-screen'

import { AppNavigator } from './app';
import { AuthNavigator } from './auth';
import NavigationService from './NavigationService';

import { Container } from '~components';
import { useAppSelector } from '~hooks/redux';
import { createAxiosInstance } from '~services';
import { store } from '~store';
import { Colors } from '~styles';

const RootNavigator = () => {
  const accessToken = useAppSelector(s => s.auth)

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  }, [])

  const createInstance = () => {
    const accessToken = store.getState().auth.access_token;
    const instance = {
      baseURL: Config.HOST_URL,
      headers: {
        'Accept': 'application/json',
        "Authorization": 'Bearer ' + accessToken
      }
    }
    createAxiosInstance(instance)
  }
  useEffect(() => {
    createInstance();
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