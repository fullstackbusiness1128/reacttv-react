import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-navigation';
import { device, gStyle } from '../constants';
import Viewers from './Viewer';

// components
import Categories from '../components/Categories';
import MediaItemScroller from '../components/MediaItemScroller';
import SlideShow from '../components/SlideShow';
// icons
import SvgBackground from '../components/icons/Svg.Background';
import SvgDisneyPlusLogo from '../assets/flicknplay.png';
// const myIcon = <Icon name="home" size={30} color="#900" />;
// const myIcon1 = <Icon name="download" size={30} color="#900" />;
// const search = <Icon name="search-circle" size={30} color="#900" />;
// const profile = <Icon1 name="user-circle" size={30} color="#900" />;

const axios = require('axios');
const Home = ({ navigation }) => {
  // console.log( navigation.openDrawer())
  const [data, ListData] = useState([])
  const [popular, SetPopular] = useState([])
  useEffect(() => {
    axios.get(`https://www.flicknplay.com/secure/homepage/lists`).then((response) => {

      // console.log()
      ListData(response.data.lists)
      // if (response.data.lists[0].id === 290) {
      //   console.log(response.data.lists[0].items)
      //   SetPopular(response.data.lists[0].items)
      // }
    })

  }, [])
  const test = () => {
    console.log('test')
  }
  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.containerHeader} >
          {/* <SvgDisneyPlusLogo/> */}
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={styles.buttons} >
              <Image
                style={styles.image}
                source={require('../assets/menu.png')}
              />
            </View>

          </TouchableOpacity>
          <Image style={{ margin: 30 }} src={SvgDisneyPlusLogo} className='img-fluid' width={200} />

        </View>

        {
          popular.length != 0 && (
            <Categories dataset1={popular} />
          )
        }

        <Viewers />
        {data.map((value, index) => {

          return <View key={value.id}>
            <Text style={gStyle.heading}>{value.name} </Text>
            <MediaItemScroller navigation={navigation} dataset={value?.items} />
          </View>
        })}

        <View style={gStyle.spacer24} />
      </ScrollView>
    </View>
  );
}


const styles = {
  containerHeader: {
    // alignItems: 'left',
    marginBottom: 8,
    marginleft: '20px',
    paddingTop: device.iPhoneNotch ? 36 : 6
  },
  bar: {
    fontSize: 20,
    // zIndex: '9',
    color: 'white'
  },
  image: {
    // zIndex: 9,
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
    marginTop: 28,
    position: 'absolute',
    top: '2%',
    // zIndex: '6',
    backgroundColor: '#202024',
  },
  item: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  list: {
    backgroundColor: '#202024'
  }
};

export default Home;
