import * as React from 'react';
import { StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { func } from './constants';
import Toast from 'react-native-toast-message'

// main navigation stack
import Stack from './navigation/Stack';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
          onError={() => {
            // console.warn
          }}
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Stack />
        <Toast />
      </React.Fragment>
    );
  }
}

registerRootComponent(App);
