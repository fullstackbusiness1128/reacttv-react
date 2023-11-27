import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import Toast from 'react-native-toast-message';
// import TabNavigator from '../navigation/TabNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AsyncStorage } from 'react-native';
const axios = require('axios');
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed =async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const showToast = (type,message) => {
      Toast.show({
        type: type,
        text1: message
      });
    }
    if (emailError || passwordError) {

      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
       return
    }
    console.log(email,password)
    if(email.value!='' || password.value!=''){
      // let body={
      //   email:email.value,
      //   password:password.value,
      //   token_name:"flicknplaysapi",
       
      // }
      const formData = new FormData();
      formData.append('email',email.value)
      formData.append('password',password.value)
      formData.append('token_name',"flicknplaysapi")
      const url = `https://www.flicknplay.com/api/v1/auth/login`
     await axios.post(url,formData , { headers: {"Content-Type" : `application/x-www-form-urlencoded`} }).then(async(response)=>{
     
        console.log(response?.data?.user)
        AsyncStorage.setItem('userDetails',JSON.stringify(response?.data?.user))
        AsyncStorage.setItem('user_token',JSON.stringify(response?.data?.user?.access_token))
        if(response?.data?.user){
          showToast('success','Login successfully')
          const user=await AsyncStorage.getItem('userDetails')
          console.log(user)
          navigation.navigate('TabNavigator')
        }
       }).catch(function(error){
         console.log(error.response)
         showToast('error',error.response.data.errors.email[0])
       })

    }
  
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'RegisterScreen',params:{TabNavigator} }],
    // })
  }

  return (
    <Background>
      <BackButton  goBack={() => navigation.replace('StartScreen')} />
      <Logo />
      <View style={{backgroundColor:'#1d1d1d',width: '100%',padding: 26,marginBottom: 13}}>
      <Text style={{color:'white'}}>Welcome back.</Text> 
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ResetPasswordScreen')}
          onPress={() => navigation.navigate('MovieDetail')}
          
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" style={styles.buttons} onPress={onLoginPressed}>
        Login
      </Button>
      </View>
      <View style={styles.row}>
        <Text style={{color:'white'}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  buttons: {
     backgroundColor:'#f65f54',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
