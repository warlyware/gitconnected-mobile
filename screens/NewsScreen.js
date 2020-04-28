import React from 'react'
import { StyleSheet, View } from 'react-native'
import NewsList from '../components/NewsList'

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={[styles.container, styles.contentContainer]}>
        <NewsList />
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
