import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'
import Image from 'react-native-remote-svg'

export default class ResourcesScreen extends React.Component {
  state = {
    categories: []
  }
  // static navigationOptions = {
  //   header: null,
  // };

  componentDidMount = () => {
    this.fetchResources()
  }

  fetchResources = async () => {
    let res = await axios.get('http://localhost:5000/v1/tutorials/categories')
    console.log(res.data)
    this.setState({ categories: res.data.categories })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.categories.map(category => (
            <ListItem
              roundAvatar
              key={category.title}
              title={category.title}
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
  },
});
