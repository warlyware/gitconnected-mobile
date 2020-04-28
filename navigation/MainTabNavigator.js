import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CategoryScreen from '../screens/CategoryScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'



import TabBarIcon from '../components/TabBarIcon'
import NewsScreen from '../screens/NewsScreen'
// import TutorialsNavigator from './TutorialsNavigator'

const NewsStack = createStackNavigator({
  News: NewsScreen,
})

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


NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-paper'
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
        ? 'ios-school'
        : 'md-school'
      }
    />
  ),
}

export default createBottomTabNavigator({
  NewsStack,
  TutorialsStack
})
