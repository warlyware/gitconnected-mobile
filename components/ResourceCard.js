import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

export default class ResourceCard extends React.Component {
  render() {
    return (
      <Card image={require('../assets/images/robot-dev.png')}>
        <View>
          <Text style={styles.name}>Name of Resource</Text>
          <Text style={styles.description}>
            A great place to learn about stuff!
          </Text>
        </View>
      </Card>
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