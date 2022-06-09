import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';

const ImageBanner = ({category}) => {

  return (
      <>
        <Image 
          source={{uri : require('../../assets/banner.png'), scale: 1}}
          containerStyle={styles.container} />
      </>
    );
    
}

const styles = StyleSheet.create({
    container: {
      // width: '100%',
      borderRadius: 10,
      height: 100,
      marginHorizontal: 10,
      marginVertical: 15,
      resizeMode: 'cover'
    }
  });
  

export default ImageBanner;
