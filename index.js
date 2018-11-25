/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Welcome from './src/components/Welcome';
import Income from './src/components/Income';
import Expenses from './src/components/Expenses';
import SignUp from './src/components/SignUp';


const StackNavigation = createStackNavigator(
  {
    Login: {
      screen: Welcome
    },
    SignUp: {
      screen: SignUp
    },
    Income: {
      screen: Income
    },
    Expenses: {
      screen: Expenses
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)


const Container = createAppContainer(StackNavigation);

AppRegistry.registerComponent(appName, () => Container);
