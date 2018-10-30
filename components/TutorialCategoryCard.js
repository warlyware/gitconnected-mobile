import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Image from 'react-native-remote-svg'

export default class TutorialCategoryCard extends React.Component {
  handleCardPress = () => {
    this.props.navigation.navigate({
      routeName: 'Category',
      key: this.props.category.slug,
      params: {
        name: this.props.category.name
      }
    })
  }

  render() {
    let { slug, name, svg } = this.props.category
    return (
      <TouchableOpacity onPress={this.handleCardPress}>
        <Card>
          <Image
          source={{ uri: svg }}
          style={styles.image}
          />
          <View>
            <Text style={styles.name}>
              {name}
            </Text>
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