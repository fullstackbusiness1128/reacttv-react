// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackProfile from './StackProfile';

export default createDrawerNavigator(
  {
  Home:  StackHome,
   Search: StackSearch,
    Downloads:StackDownloads,
    Profile:StackProfile
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.black,
      inactiveTintColor: colors.white,
      showLabel: false,
      style: {
        backgroundColor: colors.tabBackground,
        borderTopWidth: 0
      }
    }
  }
);
     