import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Main from './screens/Main';

console.disableYellowBox = true;

const AppRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerBackTitle: null,
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
  Main: {
    screen: Main,
    navigationOptions: {
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
