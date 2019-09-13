import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
const AppRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {

    },
  },
});

const AppContainer = createAppContainer(AppRoutes);

export default () => <AppContainer />;
