import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { View } from 'react-native-web'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import Background from '../components/Background'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton  goBack={() => navigation.replace('LoginScreen')} />
      <Logo />
      <View style={{backgroundColor:'#1d1d1d',width: '100%',padding: 26,marginBottom: 13}}>
      <h1 style={{color:'white'}}>Restore Password</h1>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16,backgroundColor:'#f65f54', }}
      >
        Send Instructions
      </Button>
      </View>
    </Background>
  )
}
