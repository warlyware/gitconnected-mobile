import React from 'react'
import { ScrollView, StyleSheet, Dimensions, Linking } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'
import network from '../constants/Network'
import Image from 'react-native-remote-svg'

const screenWidth = Dimensions.get('window').width

export default class CategoryScreen extends React.Component {
  state = {
    slug: '',
    tutorials: [],
    name: '',
    image: ''
  }

  componentWillMount = async () => {
    const { key } = this.props.navigation.state
    const res = await axios.get(`${network.API_URL}/v1/tutorials/categories/${key}`)
    this.navigationOptions = {
      title: res.data.name
    }
    this.setState({
      slug: key,
      tutorials: res.data.tutorials,
      name: res.data.name,
      image: res.data.svg
    })
  }

  handleTutorialPress = (tutorial) => {
    Linking.openURL(tutorial.url)
  }

  render = () => {
    return (
      <ScrollView style={styles.container}>
        <Image resizeMode={'cover'}
          style={styles.image}
          source={{ uri: this.state.image || '../assets/images/robot-dev.png' }}
        />
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.tutorials.map((tutorial, id) => (
            <ListItem
              onPress={() => this.handleTutorialPress(tutorial)}
              key={id}
              title={tutorial.name}
              badge={{ value: tutorial.externalScore }}
            />
          ))}
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenWidth
  },
  name: {
    fontSize: 30
  }
})