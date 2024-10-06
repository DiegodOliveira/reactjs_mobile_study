import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to details" 
      onPress={() => navigation.navigate('Details',{
        itemId: 34,
        otherParam: 'Pode ser qualquer coisa...'
      })  


      }/>
    </View>
  )
}

export default HomeScreen