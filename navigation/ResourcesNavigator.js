import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ResourcesScreen from '../screens/ResourcesScreen'

const ResourceNavigator = createStackNavigator({
  Resources: { screen: ResourcesScreen, }
}, {
  navigationOptions: {
    title: 'Resources'
  }
})

export default ResourceNavigator