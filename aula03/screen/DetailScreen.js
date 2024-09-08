import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({route, navigation}) => {
  
  const { itemId, otherParam} = route.params
  
    return (
    <View style={{ route, navigation}}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  )
}

export default DetailScreen