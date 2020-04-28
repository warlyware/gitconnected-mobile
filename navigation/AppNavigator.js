import React from 'react'

// import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewsScreen from '../screens/NewsScreen'
import AllCategoriesScreen from '../screens/AllCategoriesScreen'
import TabBarIcon from '../components/TabBarIcon'

// import MainTabNavigator from './MainTabNavigator'

// export default createSwitchNavigator({
//   Main: MainTabNavigator,
// })

// const Stack = createStackNavigator()
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
        <Tab.Screen name="AllCategories" component={AllCategoriesScreen}
          options={{ title: 'Tutorials' }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="News" component={NewsScreen}
        options={{ title: 'Overview' }}

        />
        <Stack.Screen name="Categories" component={AllCategoriesScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}