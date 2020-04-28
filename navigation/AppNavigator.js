import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewsScreen from '../screens/NewsScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'
import CategoryScreen from '../screens/CategoryScreen'
import TabBarIcon from '../components/TabBarIcon'

// import MainTabNavigator from './MainTabNavigator'

// export default createSwitchNavigator({
//   Main: MainTabNavigator,
// })

const Stack = createStackNavigator()

function TutorialsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllCategories" component={AllCategoriesScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
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
      })}>
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Tutorials" component={TutorialsNavigator}
          options={{ title: 'Tutorials' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}