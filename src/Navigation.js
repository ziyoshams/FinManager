import { createStackNavigator, createAppContainer } from 'react-navigation';

import Welcome from './components/Welcome';
import Income from './components/Income';
import Expenses from './components/Expenses';
import SignUp from './components/SignUp';

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
    headerMode: 'none'
  }
);

export const Navigation = createAppContainer(StackNavigation);

