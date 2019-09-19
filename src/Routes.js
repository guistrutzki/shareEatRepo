import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './screens/Home';
import Main from './screens/Main';
import Services from './screens/Services';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

const AppRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  Services: {
    screen: Services,
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
