import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import NewsScreen from '../screens/NewsScreen'
import TutorialsNavigator from './TutorialsNavigator'

const NewsStack = createStackNavigator({
  News: NewsScreen,
})

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-paper${focused ? '' : '-outline'}`
          : 'md-paper'
      }
    />
  ),
}

const TutorialsStack = createStackNavigator({
  Tutorials: TutorialsNavigator,
}, {
  navigationOptions: () => ({
    header: null
  })
})

TutorialsStack.navigationOptions = {
  tabBarLabel: 'Tutorials',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
        ? `ios-school${focused ? '' : '-outline'}`
        : 'md-school'
      }
    />
  ),
}

export default createBottomTabNavigator({
  NewsStack,
  TutorialsStack
})
