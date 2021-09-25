import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import List from './Views/List';


export default function App() {
  
  return (

    <View style={styles.container}>           
        <List key='list' />       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  textItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e6e6fa',
    fontSize: '1.5em',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
