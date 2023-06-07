import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import routes from '../routes';
import Home from '../../screens/home/Home';

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