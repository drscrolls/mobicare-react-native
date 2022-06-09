import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';

const ImageBanner = () => {

  return (
      <>
        <Image 
          source={{uri : 'https://www.ems-usa.com/wp-content/uploads/2015/05/placeholder-banner.jpg'}}
          containerStyle={styles.container}
          PlaceholderContent={<ActivityIndicator />} />
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
