import React from 'react'
import { createStackNavigator } from 'react-navigation'

import CategoryScreen from '../screens/CategoryScreen'
import ResourcesScreen from '../screens/ResourcesScreen'

const ResourceNavigator = createStackNavigator({
  Resources: ResourcesScreen,
  Category: CategoryScreen,
}, {
  navigationOptions: ({ navigation }) => {
    let title
    if (navigation.state.params && navigation.state.params.name) {
      title = navigation.state.params.name
    } else {
      title = 'Resouces'
    }
    return { title }
  }
})

export default ResourceNavigator