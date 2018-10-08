import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'
import network from '../constants/Network'

export default class TutorialsScreen extends React.Component {
  state = {
    categories: []
  }

  fetchResources = async () => {
    let res = await axios.get(`${ network.API_URL }/tutorials/categories`)
    this.setState({ categories: res.data.categories })
  }

  handleResourcePress = (resource) => {
    this.props.navigation.navigate({
      routeName: 'Category',
      key: resource.slug,
      params: {
        name: resource.name
      }
    })
  }

  componentDidMount = () => {
    this.fetchResources()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.categories.map(category => (
            <ListItem
              onPress={() => this.handleResourcePress(category)}
              key={category.slug}
              roundAvatar
              avatar={category.image}
              title={category.name}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
