import React from 'react'
import ResourceCard from './ResourceCard'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

export default class FeaturedResourcesList extends React.Component {
  state = {
    featuredCategories: []
  }

  fetchFeaturedResources = async () => {
    let res = await axios.get('http://localhost:5000/v1/tutorials/featured-categories')
    console.log(res.data)
    this.setState({ featuredCategories: res.data.categories })
  }

  componentDidMount = () => {
    this.fetchFeaturedResources()
  }

  renderFeaturedResources = () => {
    if (this.state.featuredCategories) {
      return this.state.featuredCategories.map(category => (
        <ResourceCard resource={category} key={category.slug} />
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