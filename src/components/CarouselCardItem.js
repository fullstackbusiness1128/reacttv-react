import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { images } from '../constants'
export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

const CarouselCardItem = ({ item, index }) => {
    console.log(item)
  return (
    <View style={styles.container} key={index} >
      <Image style={{position:'unset',}} source={images[item.image]}    
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    height:250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem