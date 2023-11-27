import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import Toast from 'react-native-toast-message';
const axios = require('axios');
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const showToast = (type,message) => {
      Toast.show({
        type: type,
        text1: message
      });
    }
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    if(email.value!='' || password.value!=''){
      // let body={
      //   email:email.value,
      //   password:password.value,
      //   token_name:"flicknplaysapi",
       
      // }
      const formData = new FormData();
      formData.append('email',email.value)
      formData.append('password',password.value)
      formData.append('display_name',name.value)
      formData.append('password_confirmation',password.value)
      formData.append('token_name','flicknplaysapi')
      const url = `https://www.flicknplay.com/api/v1/auth/register`
     await axios.post(url,formData , { headers: {"Content-Type" : `application/x-www-form-urlencoded`} }).then(async(response)=>{

        console.log(response)
        if(response?.data?.status=="needs_email_verification"){
          showToast("success","needs_email_verification")
          navigation.navigate('LoginScreen')
        }
       }).catch(function(error){
         console.log(error.response.data.errors.email[0])
         showToast("error",error.response.data.errors.email[0])
       })

    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('LoginScreen')}/>
      <Logo />
      <View style={{backgroundColor:'#1d1d1d',width: '100%',padding: 26,marginBottom: 13}}>
      <Text style={{color:'white'}}>Create Account</Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24,backgroundColor:'#f65f54', }}
      >
        Sign Up
      </Button>
      </View>
      <View style={styles.row}>
        <Text style={{color:'white'}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
 row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
