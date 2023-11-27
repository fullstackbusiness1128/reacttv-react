import React from 'react'
import { ImageBackground,View, StyleSheet, KeyboardAvoidingView,Text } from 'react-native'

import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
      <View style={styles.backgroundcolor} >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text>{children}</Text>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = {
  backgroundcolor: {
    width: '100%',
    height:'100%',
    backgroundColor: '#0b0d15',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    marginHorizontal: 'auto',
    height:'100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
