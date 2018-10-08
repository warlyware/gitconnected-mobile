import React from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { MonoText } from '../components/StyledText'
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

  handleNewsPostPress = post => {
    Linking.openURL(post.linkUrl)
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
          <TouchableOpacity key={post.postTime}
          onPress={() => this.handleNewsPostPress(post)}>
            <Card image={
              post.linkImage.indexOf('svg') === -1
              ? {uri: post.linkImage}
              : require('../assets/images/gc-hero.png')
            }
            title={post.linkTitle}>
              <View style={styles.infoRow}>
                <Image
                source={{ uri: `https://gitconnected.com/public/images/tutorials/${post.category}` }}
                style={styles.smallImage}/>
                <Text>
                  {post.categoryName}
                </Text>
                <Image
                source={{ uri: post.favicon}}
                style={[ styles.smallImage, { marginLeft: 10} ]}/>
                <Text>
                  {post.domain}
                </Text>
              </View>
              {post.ownerUsername !== 'treyhuffine' &&
                <View style={[ styles.infoRow, { paddingTop: 8 } ]}>
                  <Text>
                    Posted by {post.ownerUsername}
                  </Text>
                </View>
              }
            </Card>
          </TouchableOpacity>
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