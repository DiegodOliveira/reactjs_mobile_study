import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio02 = () => {

const [contador, setContador] = useState(0)

 function incrementar(){
    setContador(contador+1)
 }

 function decrementar(){
    setContador(contador-1)
 }

  return (
    <View style={styles.container}>
        <Button title='Incrementar' onPress={incrementar} />
        <Text>O contador está em {contador}</Text>
        <Button title='Decrementar' onPress={decrementar} />
        <Text>O contador está em {contador}</Text>
    </View>
  )

  
  
}

const styles = StyleSheet.create({
  container:{
      alignItems: "center",
      JustifyContent: "center",
      padding: 100
  }
}

)

export default Exercicio02