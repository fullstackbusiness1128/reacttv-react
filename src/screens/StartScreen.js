import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { useEffect } from 'react'
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function StartScreen({ navigation }) {
  useEffect(async()=>{
   const token= await AsyncStorage.getItem('user_token')
   console.log(token)
   
   if(token){
    navigation.navigate('TabNavigator')
   }
  },[])
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph style={{color:'white', textAlign:'center',marginBottom:20}}>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
         style={{backgroundColor:'#f65f54', }}
        mode="contained"
        onPress={() => navigation.replace('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
