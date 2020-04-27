import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Linking,
  Image
} from 'react-native'
import { ListItem } from 'react-native-elements'
import axios from 'axios'
import network from '../constants/Network'

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
    const res = await axios.get(`${network.API_URL}/tutorials/categories/${key}`)
    const { category, tutorials } = res.data
    this.navigationOptions = {
      title: category.name
    }
    this.setState({
      slug: category.slug,
      tutorials,
      name: category.name,
      image: category.image
    })
  }

  handleTutorialPress = (tutorial) => {
    Linking.openURL(tutorial.originalLink)
  }

  render = () => {
    return (
      <ScrollView style={styles.container}>
        <Image resizeMode={'cover'}
          style={styles.image}
          source={{ uri: this.state.image || '../assets/images/robot-dev.png' }}
        />
        {this.state.tutorials.map((tutorial, id) => (
          <ListItem
            onPress={() => this.handleTutorialPress(tutorial)}
            key={id}
            title={tutorial.name}
            badge={{ value: tutorial.score }}
          />
        ))}
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