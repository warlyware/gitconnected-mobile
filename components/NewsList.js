import React from 'react'
import axios from 'axios'
import { View, Text, StyleSheet } from 'react-native'
import { MonoText } from './StyledText'
import NewsCard from './NewsCard'
import network from '../constants/Network'


export default class NewsList extends React.Component {
  state = {
    posts: []
  }

  fetchNews = async () => {
    let res = await axios.get(`${ network.API_URL }/posts/feed`)
    this.setState({
      posts: res.data.posts
    })
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
        {this.state.posts.map(post => (
          <NewsCard key={post.postTime}
          post={post} />
        ))}
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