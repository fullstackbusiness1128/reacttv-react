import React from 'react'
import { Image, StyleSheet } from 'react-native'
import SvgDisneyPlusLogo from '../assets/flicknplay.png';

export default function Logo() {
  return <Image source={SvgDisneyPlusLogo} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
    resizeMode:'contain',
  },
})
