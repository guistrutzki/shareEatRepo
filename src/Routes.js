import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';

const AppRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#EEAD4f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
  },
});

const AppContainer = createAppContainer(AppRoutes);

export default () => <AppContainer />;
