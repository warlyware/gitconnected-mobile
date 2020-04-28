import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default ({ uri }) => {
  return <Image
    source={{ uri }}
    style={[styles.smallImage]} />
}

const styles = StyleSheet.create({
  smallImage: {
    height: 20,
    width: 20,
  }
})