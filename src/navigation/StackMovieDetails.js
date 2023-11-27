import { createStackNavigator } from 'react-navigation-stack';
import {
    MovieDetail1
} from '../screens/index'



export default createStackNavigator(
    {
        MovieDetail1: { screen: MovieDetail1}
    },
    {
      initialRouteName: 'MovieDetail1',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      },
      initialRouteParams:{ name: 'test' }
  
  
    }
  );