/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Navigation } from 'react-native-navigation';

import App from './src/App';
import Income from './src/components/Income';
import Expenses from './src/components/Expenses';

Navigation.registerComponent('WelcomeWindow', () => App);
Navigation.registerComponent('IncomeWindow', () => Income);
Navigation.registerComponent('ExpensesWindow', () => Expenses);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: true
          }
        },
        children: [
          {
            sideMenu: {
              left: {
                component: {
                  name: 'WelcomeWindow',
                  passProps: {
                    text: 'This is a left side menu screen'
                  }
                }
              },
              center: {
                component: {
                  name: 'IncomeWindow'
                }
              },
              right: {
                component: {
                  name: 'ExpensesWindow',
                  passProps: {
                    text: 'This is a right side menu screen'
                  }
                }
              }
            }
          },
          {
            component: {
              name: 'WelcomeWindow',
              passProps: {
                text: 'This is tab 2'
              }
            }
          }
        ]
      }
    }
  });
});

AppRegistry.registerComponent(appName, () => App);
