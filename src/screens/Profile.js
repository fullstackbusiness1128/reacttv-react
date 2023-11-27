import * as React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

// components
import HeaderAccounts from '../components/HeaderAccounts';
import TouchLineItem from '../components/TouchLineItem';

// icons
import SvgBackground from '../components/icons/Svg.Background';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false }
  );
};

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <View style={gStyle.posAbsolute}>
      {/* <SvgBackground /> */}
    </View>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.buttons} >
          <Image style={styles.image} source={require('../assets/menu.png')} />
        </View>

      </TouchableOpacity>
    <HeaderAccounts />

    <ScrollView>
      <TouchLineItem
        onPress={() => navigation.navigate('ProfileWatchlist')}
        text="Watchlist"
      />
      <TouchLineItem
        onPress={() => navigation.navigate('ProfileAppSettings')}
        text="App Settings"
      />
      <TouchLineItem onPress={() => null} text="Account" />
      <TouchLineItem onPress={() => null} text="Legal" />
      <TouchLineItem onPress={() => null} text="Help" />
      <TouchLineItem onPress={() => alertSignOut()} text="Log Out" />

      <Text style={styles.versionText}>
        {`Version: ${Constants.manifest.version}`}
      </Text>
    </ScrollView>
  </View>
);

Profile.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = {
  versionText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.regular,
    fontSize: 18,
    marginLeft: 16,
    paddingVertical: 16
  },
  container:{
   backgroundColor:'#202024'
  },
  image: {
    zIndex: 9,
    position: 'relative'
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 10,
    width: 53,
    height: 45,
    elevation: 3,
    marginTop: 12,
    position:'absolute',
    top: '2%',
    zIndex:'6',
    backgroundColor: '#202024',
  },
};

export default Profile;
