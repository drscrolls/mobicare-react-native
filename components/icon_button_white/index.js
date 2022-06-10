import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import { SvgUri } from 'react-native-svg';

const IconButtonWhite = (props) => {
    // const image = props.image; 
    // const image = props.image;

    return (
        <View style={[styles.container]}>
            <Image
              source={{uri : "https://im2.ezgif.com/tmp/ezgif-2-958a4e03f3.png"}}
              style={styles.image}
              width={20}
              height={20}
              fill="#777"
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(227, 226, 226, 0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 37, 
      height: 37, 
    },
    image: {
      tintColor: "#777",
      width: 20, 
      height: 20, 
      justifyContent: 'center', 
      alignSelf: 'center',
      // resizeMode: 'contain',
    }
  });
  

export default IconButtonWhite;
