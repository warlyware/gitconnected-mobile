import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CategoryScreen from '../screens/CategoryScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'

const TutorialsNavigator = createStackNavigator({
  AllCategoriesScreen: AllCategoriesScreen,
  Category: CategoryScreen,
}, {
  navigationOptions: ({ navigation }) => {
    let title
    if (navigation.state.params && navigation.state.params.name) {
      title = navigation.state.params.name
    } else {
      title = 'Tutorials'
    }
    return { title }
  }
})

export default TutorialsNavigator