import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewsScreen from '../screens/NewsScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'
import CategoryScreen from '../screens/CategoryScreen'
import TabBarIcon from '../components/TabBarIcon'

const Stack = createStackNavigator()

function TutorialsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllCategories" component={AllCategoriesScreen}
        options={{ title: 'Tutorials' }}
      />
      <Stack.Screen name="Category" component={CategoryScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarOnPress: ({ navigation }) => {
          navigation.popToTop()
          navigation.navigate(navigation.state.routeName)
        },
        tabBarIcon: ({ focused, name }) => {
          let icon
          if (route.name === 'News') { icon = 'paper' }
          if (route.name === 'Tutorials') { icon = 'school' }
          return (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-${icon}`
                  : `md-${icon}`
              }
            />
          )},
      })}>
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Tutorials" component={TutorialsNavigator}
          options={{ title: 'Tutorials' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}