import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from 'react-native-elements'
import UserAvatar from '../components/UserAvatar'

export default class NewsCard extends React.PureComponent {

  handleNewsPostPress = () => {
    Linking.openURL(this.props.post.linkUrl)
  }

  render() {
    let { post } = this.props
    return (
      <TouchableOpacity
      onPress={this.handleNewsPostPress}>
        <Card image={
          !!post.linkImage && post.linkImage.indexOf('svg') === -1
          ? {uri: post.linkImage}
          : require('../assets/images/gc-hero.png')
        }
        title={post.title}>
          <View style={styles.infoRow}>
            {/* <Image
            source={{ uri: `https://gitconnected.com/public/images/tutorials/${post.category}` }}
            style={styles.smallImage}/>
            <Text>
              {post.categoryName}
            </Text>
            <Image
            source={{ uri: post.favicon}}
            style={[ styles.smallImage, { marginLeft: 10} ]}/> */}
            <MaterialCommunityIcons name="web" size={15} />
            <Text style={{ paddingLeft: 14 }}>
              {post.domain}
            </Text>
          </View>
          {(post.ownerUsername !== 'treyhuffine') &&
            <View style={[ styles.infoRow, { paddingTop: 8 } ]}>
              <UserAvatar uri={post.ownerAvatarUrl}/>
              <Text style={{ paddingLeft: 8}}>
                Posted by {(post.ownerUsername === 'treyhuffine')
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
    height: 10,
    width: 10,
    marginRight: 3,
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})