import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import * as Asset from 'expo-asset'
import { useFonts } from '@use-expo/font'

import AppNavigator from './navigation/AppNavigator'

export default props => {
  let [ fontsLoaded ] = useFonts({
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    )
  }
}

  // loadResourcesAsync = async () => {
  //   await Asset.loadAsync([
  //     require('./assets/images/robot-dev.png'),
  //     require('./assets/images/robot-prod.png'),
  //   ]),
  //   await useFonts({
  //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //   })
  // }

  // handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error)
  // }

  // handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true })
  // }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// })
