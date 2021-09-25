import React, { useState } from 'react'
import { View } from 'react-native'
import List from './Views/List';


export default function App() {
  
  return (

    <View style={styles.container}>           
        <List key='list' />       
    </View>
  )
}


