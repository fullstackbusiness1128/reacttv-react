import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, Image
} from 'react-native';
import { colors, gStyle } from '../constants';
import { useState } from 'react';
// icons
import SvgBackground from '../components/icons/Svg.Background';
const axios = require('axios');
const Search = ({navigation}) => {
  const [number, onChangeNumber] = React.useState();
  const [searchdata, searchDataOnChange] = React.useState([])
  const onSearchChange = (e) => {
    if (e.target.value != undefined) {
      onChangeNumber(e.target.value)
      fetchData(e.target.value)
    }
  }
  const label = number ? 'Movies & TV Shows' : 'Top Searches';
  const fetchData = (text) => {
    console.log(text)
    axios.get(`https://www.flicknplay.com/secure/search/${text}`).then(async (response) => {

      await searchDataOnChange(response?.data?.results)
    })
    console.log(searchdata)
  }

  return (
    //   <View style={gStyle.container}>
    //   <TextInput
    //     style={styles.input}
    //     onChange={onSearchChange}
    //     value={number}
    //     placeholder="Search for movies,tv shows and people "
    //     keyboardType="numeric"
    //   />
    // <View style={gStyle.posAbsolute}>
    //   {/* <SvgBackground /> */}
    // </View>

    // <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
    //   <View >
    //     {searchdata&&
    //     searchdata.map((data,index)=>{
    //       console.log(data)
    //     })}
    //     </View>
    // </ScrollView>
    // </View>
    <View style={styles.searchContainer}>
     
      <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.buttons} >
          <Image style={styles.image} source={require('../assets/menu.png')} />
        </View>

      </TouchableOpacity>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search"
            placeholderTextColor='#757575'
            value={number}
            onChange={onSearchChange}
            clearButtonMode="while-editing"
            selectionColor='#757575'
            style={styles.textInput}
          />
        </View>
        <ScrollView style={{ maxHeight: '82vh' }}>
          <View  >
            <Text style={styles.label}>{label}</Text>
            <View style={styles.listContainer}>
              {searchdata && searchdata.length > 0 ? searchdata
                .filter((el) => el.poster != null)
                .map((el) => (
                
                  <TouchableOpacity onPress={()=>{  navigation.navigate('StackMovieDetails',{movieId:el})}}>
                    <View style={{ display: 'inline-flex' }} >
                      <Image style={styles.tinyLogo} source={el.poster} />

                      <Text style={styles.textColor}>{el.name}</Text>

                    </View>

                    <br />
                    </TouchableOpacity>
                  



                )) : (<View style={{ textAlign: 'center' }}>
                  <Text style={styles.textColors}>
                    Not Found
                  </Text>
                </View>)}
            </View>
            {/* <MediaResults data={data} error={error} /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor:colors.white
//   },
// });
const styles = {
  searchContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#202024',
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    //  flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  tinyLogo: {
    width: 150,
    height: 150,
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
  textColor: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 700,
    marginTop: 10
  },
  searchInput: {
    backgroundColor: '#D3D3D3',
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 16,
    marginRight: 4,
    marginLeft: 64,
    borderRadius: 4,
    padding: 4,
  },
  textInput: {
    color: '#111111',
    height: 30,
  },
  label: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
  },
  textColors: {
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 700,
    margin: '10px ',
    textAlign: 'center'
  },
};
export default Search;
