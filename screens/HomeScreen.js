import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FeaturedResourcesList from '../components/FeaturedResourcesList'

import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Image resizeMode={'cover'}
            style={styles.hero}
            source={require('../assets/images/gc-hero.png')}
          />
          <View style={styles.infoBox}>
            <Text>
              Welcome to the gitconnected mobile learning app.
              Here you can find, save, and view programming resources of all kinds.
          </Text>
          </View>
          <FeaturedResourcesList />
        </ScrollView>
        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={styles.codeHighlightContainer}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    marginTop: 20,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: '#2E6CB3',
    width: '100%',
    height: 200
  },
  infoBox: {
    backgroundColor: '#f6f6f6',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  contentContainer: {
    paddingTop: 30,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }
})
