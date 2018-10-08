import React from 'react'
import TutorialCategoryCard from './TutorialCategoryCard'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import network from '../constants/Network'

export default class FeaturedTutorialsList extends React.Component {
  state = {
    featuredCategories: []
  }

  fetchFeaturedCategories = async () => {
    let res = await axios.get(`${network.API_URL}/tutorials/featured-categories`)
    this.setState({ featuredCategories: res.data.categories })
  }

  componentDidMount = () => {
    this.fetchFeaturedCategories()
  }

  renderFeaturedCategories = () => {
    if (this.state.featuredCategories) {
      return this.state.featuredCategories.map(category => (
        <TutorialCategoryCard category={category}
          key={category.slug}
          navigation={this.props.navigation}
        />
      )
    )}
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Featured Tutorial Categories</Text>
        {this.renderFeaturedCategories()}
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