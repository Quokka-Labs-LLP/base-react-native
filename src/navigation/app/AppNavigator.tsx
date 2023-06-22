import React, { useEffect } from 'react';

import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from '../../screens/home/Home';
import routes from '../routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        // initialRouteName={routes.TabNav}
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name={routes.Home}
          component={Home}
        />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default AppNavigator; 