import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Card } from 'react-native-elements'
import { WebBrowser } from 'expo'

export default class ResourceCard extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
        Linking.openURL(
          'https://gitconnected.com'
        )
       }}>
        <Card image={require('../assets/images/robot-dev.png')}>
          <View>
            <Text style={styles.name}>Name of Resource</Text>
            <Text style={styles.description}>
              A great place to learn about stuff!
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18
  },
  description: {
    marginVertical: 10,
    fontSize: 14
  }
})