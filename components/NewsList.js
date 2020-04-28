import React from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MonoText } from './StyledText'
import NewsCard from './NewsCard'
import network from '../constants/Network'
import debounce from 'lodash.debounce'


export default class NewsList extends React.Component {
  state = {
    posts: [],
    nextPage: null,
    flatListReady: false
  }

  fetchNews = async () => {
    let url = this.state.nextPage
      ? `${network.API_URL}/posts/feed/latest/${this.state.nextPage}`
      : `${network.API_URL}/posts/feed/latest`

    let res = await axios.get(url)

    let posts = this.state.posts.length ? [ ...this.state.posts, ...res.data.posts ] : res.data.posts
    this.setState({
      posts,
      nextPage: res.data.nextPage ? res.data.nextPage : null
    })
  }

  renderItem = ({ item }) => {
    return <NewsCard key={(item.id + item.createdAt).toString()} post={item} />
  }

  componentDidMount() {
    this.fetchNews()
  }

  render = () => {
    return (
      <View style={styles.container}>
        <View style={[styles.shadow, { backgroundColor: 'white',  }]}>
          <Text style={styles.heading}>
            News For Developers
          </Text>
          <MonoText style={styles.subHeading}>
            BY DEVELOPERS
          </MonoText>
        </View>
        {!!this.state.posts.length &&
          <FlatList keyExtractor={post => (post.id + post.createdAt).toString()}
          onScroll={this.scrolled}
          data={this.state.posts}
          renderItem={this.renderItem}
          onEndReached={debounce(this.fetchNews, 200)}
          onEndReachedThreshold={3}
          />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 20
  },
  subHeading: {
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 8
  },
  smallImage: {
    height: 15,
    width: 15,
    marginRight: 3,
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,

    elevation: 8,
  }
})