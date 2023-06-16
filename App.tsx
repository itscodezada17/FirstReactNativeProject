/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Button
} from 'react-native';



export default function App() {




  const [text, setText] = useState('')
  const [resText, setfinal] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        style={{ fontSize: 32, color: 'steelblue' }}
        placeholder="Type here_______"
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Button
        title={'Press me!'}
        onPress={() => {
          setfinal(text)
        }}
      />
      <Text style={ {fontSize: 42, color: 'steelblue'}}>{`Welcome ${resText}`}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    padding: 15,
  },
})
