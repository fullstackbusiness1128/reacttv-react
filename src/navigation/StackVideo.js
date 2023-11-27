import { createStackNavigator } from 'react-navigation-stack';
import {
    VideoPlay
} from '../screens/index'



export default createStackNavigator(
    {
        VideoPlay: { screen: VideoPlay}
    },
    {
      initialRouteName: 'VideoPlay',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      },
    //   initialRouteParams:{ name: 'test' }
  
  
    }
  );