import React from 'react'
import {Alert, Pressable, Text, TextInput } from 'react-native'

import { styles } from './BatFormInputsStyles'
import {styles as styles2} from '../BatButton/BatButtonStyles'

export function BatFormInputs() {
  return (
    <>
      <Text style={styles.labels}>Name</Text>
      <TextInput style={styles.inputs} placeholder='Enter your name' placeholderTextColor='#2e2828'></TextInput>
      <Text style={styles.labels}>Contact</Text>
      <TextInput style={styles.inputs} placeholder='Enter your number phone here' keyboardType='phone-pad' placeholderTextColor='#2e2828'></TextInput>
      <Text style={styles.labels}>Your location</Text>
      <TextInput style={styles.largeInputs} placeholder='Enter a reference here' placeholderTextColor='#2e2828'></TextInput>
      <Text style={styles.labels}>Emergence</Text>
      <TextInput style={styles.largeInputs} placeholder='Enter your message...' placeholderTextColor='#2e2828'></TextInput>
      <Pressable style={styles2.button} onPress={() => {Alert.alert('mensagem enviada!')}}>
       <Text style={styles2.text}>Enviar</Text>
      </Pressable>
    </>
  )
}