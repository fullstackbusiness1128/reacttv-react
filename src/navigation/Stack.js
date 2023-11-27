import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// grab screens
import ModalAddProfile from '../screens/ModalAddProfile';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';
import  StackLoGin from'./StackLogin'
import StackMovieDetails from './StackMovieDetails';
//import  AsyncStorage  from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StackVideo from './StackVideo';
// grab tabbed stacks
import TabNavigator from './TabNavigator';

// const token= AsyncStorage.getItem('token')
// console.log(token)
const StackNavigator = createStackNavigator(
  
  {
    Main: {
      screen: StackLoGin
    },
     TabNavigator,
     StackMovieDetails,
     StackVideo,
    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalAddProfile,
    ModalManageProfiles,
    ModalVideo,
    ModalWebView,
    
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);


export default App;
