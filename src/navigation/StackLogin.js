import { createStackNavigator } from 'react-navigation-stack';

import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ResetPasswordScreen,
    Home,
    MovieDetail
  } from '../screens/index'
export default createStackNavigator(
    {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    Home,
    ResetPasswordScreen,
    MovieDetail
    },
    {
      initialRouteName: 'StartScreen',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
  
  
    }
  );