import * as React from 'react';
import { StyleSheet, Text ,Image,TouchableOpacity, View} from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// components
import Header from '../components/Header';

// icons
import SvgBackground from '../components/icons/Svg.Background';
import SvgDownloads from '../components/icons/Svg.Downloads';

const Downloads = ({navigation}) => (
  <View style={styles.container}>
    {/* <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View> */}
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.buttons} >
          <Image style={styles.image} source={require('../assets/menu.png')} />
        </View>

      </TouchableOpacity>
    <Header title="Downloads" />
   
    <View style={styles.containerContent}>
      <View style={styles.containerIcon}>
        <SvgDownloads fill={colors.profileBackground} size={48} />
      </View>

      <Text style={styles.heading}>You have no downloads</Text>

      <Text style={styles.description}>
        Movies and series you download will appear here.
      </Text>
    </View>
  </View>
);

const styles = {
  containerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  container:{
    backgroundColor:'#202024',
    flex: 1
  },
  containerIcon: {
    alignItems: 'center',
    borderColor: colors.profileBackground,
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 100
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300
  },
  description: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300
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

export default Downloads;
