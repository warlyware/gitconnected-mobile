import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import NewsList from '../components/NewsList'

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Image resizeMode={'cover'}
            style={styles.hero}
            source={require('../assets/images/gc-hero.png')}
          />
          <NewsList />
        </ScrollView>
      </View>
    )
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
  contentContainer: {
    paddingTop: 30,
  }
})
