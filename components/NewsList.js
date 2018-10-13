import React from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MonoText } from './StyledText'
import NewsCard from './NewsCard'
import network from '../constants/Network'


export default class NewsList extends React.Component {
  state = {
    posts: [],
    nextPage: null,
    flatListReady: false
  }

  fetchNews = async () => {
    url = this.state.nextPage
      ? `${ network.API_URL }/posts/feed?page=${this.state.nextPage}`
      : `${ network.API_URL }/posts/feed`

    let res = await axios.get(url)
    let posts = this.state.posts.length ? [ ...this.state.posts, ...res.data.posts ] : res.data.posts
    console.log(res.data.nextPage)
    this.setState({
      posts,
      nextPage: res.data.nextPage ? res.data.nextPage : null
    })
  }

  renderItem = ({ item }) => {
    return <NewsCard key={item.postTime} post={item} />
  }

  componentDidMount() {
    this.fetchNews()
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          News For Developers
        </Text>
        <MonoText style={styles.subHeading}>
          BY DEVELOPERS
        </MonoText>
        {this.state.posts.length &&
          <FlatList keyExtractor={post => post.postTime}
          onScroll={this.scrolled}
          data={this.state.posts}
          renderItem={this.renderItem}
          onEndReached={this.fetchNews}
          onEndReachedThreshold={0}
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
    alignSelf: 'center'
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
  }
})