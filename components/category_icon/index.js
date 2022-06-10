// import SvgUri from 'expo-svg-uri';
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'

const CategoryIcon = (props) => {
    const image = props.image;

    return (
        <View style={styles.container}>
            <Image
              source={{uri :image}}
              fill='white'
              width={25}
              height={25}
              style={styles.image}
            />
        </View> 
    );
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(235, 240, 252, 0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 50,
      width: 37, 
      height: 37, 
      marginBottom: 5
    },
    image: {
      tintColor: "#ffffff",
      width: 25, 
      height: 25, 
      justifyContent: 'center', 
      alignSelf: 'center',
      resizeMode: 'contain',
    }
  });
  

export default CategoryIcon;
