import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio3 = () => {
  return (
    <View style = {styles.container}>
      <View style = {[styles.box, {backgorundColor: 'powderblue', width: 50}]} />
      <View style = {[styles.box, {backgorundColor: 'blue'}]} />
      <View style = {[styles.box, {backgorundColor: 'red', width: 50}]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100
    },
    box: {
        height: '100%',
    },
    flexBox: {
        flex: 1
    }
})

export default Exercicio3