import { Stack } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'
const COLORS={
  Bgcolor:'#fff444'
}
const HomeScreen = () => {
  return (
  <Stack screenOptions={{
      headerStyle:{backgroundColor:COLORS.Bgcolor},
  }}>
    <Text>HomePage</Text>
  </Stack>
  )
}

export default HomeScreen