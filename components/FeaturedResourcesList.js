import React from 'react'
import ResourceCard from './ResourceCard'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import network from '../constants/Network'

export default class FeaturedResourcesList extends React.Component {
  state = {
    featuredCategories: []
  }

  fetchFeaturedResources = async () => {
    let res = await axios.get(`${network.API_URL}/v1/tutorials/featured-categories`)
    this.setState({ featuredCategories: res.data.categories })
  }

  componentDidMount = () => {
    this.fetchFeaturedResources()
  }

  renderFeaturedResources = () => {
    if (this.state.featuredCategories) {
      return this.state.featuredCategories.map(category => (
        <ResourceCard resource={category}
          key={category.slug}
          navigation={this.props.navigation}
        />
      )
    )}
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Featured Resources</Text>
        {this.renderFeaturedResources()}
      </View>
    )
  }
}

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