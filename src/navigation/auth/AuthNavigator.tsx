import React, { useEffect } from 'react';

import { useTheme } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import routes from '~navigation/routes';
import { LoginScreen } from '~screens';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const theme = useTheme();
  useEffect(() => {
    // crashlytics().log('AuthNavigator Mounted');
  }, [])

  return (
    <>
      <Stack.Navigator
        initialRouteName={routes.Welcome}
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name={routes.Login}
          component={LoginScreen}
          options={{
            headerMode: 'screen',
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
          }}
        />
      </Stack.Navigator>
    </>
  )
}

export default AuthNavigator;