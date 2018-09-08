import React from 'react'
import ResourceCard from './ResourceCard'
import { View, Text, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

const FeaturedResourcesList = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Featured Resources</Text>
    <ResourceCard />
  </View>
)

export default FeaturedResourcesList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    alignSelf: 'center',
    marginVertical: 20
  },
})