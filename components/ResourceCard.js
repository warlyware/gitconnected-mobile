import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Card } from 'react-native-elements'
import Image from 'react-native-remote-svg'
import { WebBrowser } from 'expo'

export default class ResourceCard extends React.Component {
  render() {
    let { slug, name, svg } = this.props.resource
    return (
      <TouchableOpacity onPress={() => {
        WebBrowser.openBrowserAsync(
          `https://gitconnected.com`
        )
       }}>
        <Card>
          <Image
          source={{ uri: svg }}
          style={styles.image}
          />
          <View>
            <Text style={styles.name}>
              {name}
            </Text>
            {/* <Text style={styles.description}>
              This is where a description would go.
            </Text> */}
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20
  },
  name: {
    fontSize: 22
  },
  description: {
    marginVertical: 10,
    fontSize: 14
  }
})