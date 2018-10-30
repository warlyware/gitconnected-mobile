import React from 'react'
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

export default class NewsCard extends React.PureComponent {

  handleNewsPostPress = post => {
    Linking.openURL(post.linkUrl)
  }

  render() {
    let { post } = this.props
    return (
      <TouchableOpacity
      onPress={() => this.handleNewsPostPress(post)}>
        <Card image={
          !!post.linkImage && post.linkImage.indexOf('svg') === -1
          ? {uri: post.linkImage}
          : require('../assets/images/gc-hero.png')
        }
        title={post.title}>
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
          {(post.ownerUsername !== 'treyhuffine' || post.ownerUsername !== 'warlyware') &&
            <View style={[ styles.infoRow, { paddingTop: 8 } ]}>
              <Text>
                Posted by {(post.ownerUsername === 'treyhuffine' || post.ownerUsername === 'warlyware')
                  ? 'gitconnected'
                  : post.ownerUsername
                }
              </Text>
            </View>
          }
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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