import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import DetailScreen from '../screen/DetailScreen'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator()
  
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>   
        <Stack.Screen name = "Details" component={DetailScreen} />   
    </Stack.Navigator>
  )
}

export default AppNavigation