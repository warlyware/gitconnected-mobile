import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ResourcesScreen from '../screens/ResourcesScreen'

const ResourceNavigator = createStackNavigator({
    Resources: { screen: ResourcesScreen, }
  }, {
    navigationOptions: {
      title: 'Resources',
      headerTitle: 'Resources'
    }
  })

export default ResourceNavigator