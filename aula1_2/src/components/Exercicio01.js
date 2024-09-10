import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const exercicio01 = ({nome}) => {
  return (
    <View>
      <Text>Olá bem vindo {nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:100
  },
  text: {
    color: 'black',
    fontSize: 20
  }
})

export default exercicio01