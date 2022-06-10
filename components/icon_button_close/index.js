import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import { SvgUri } from 'react-native-svg';

const IconButtonClose = (props) => {

    const [Pressed, setPressed] = useState(0);

    return (
      
            <Pressable 
              onPress={() => {
                setPressed();
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgba(147, 147, 147, 0.4)' : 'rgba(227, 226, 226, 0.4)',
                },
                styles.container,
              ]}>
                <Image
                  source={{uri : "https://img.icons8.com/material-outlined/344/delete-sign.png"}}
                  style={styles.image}
                  width={20}
                  height={20}
                  fill="#777"
                />
            </Pressable>

    );
    
}

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 37, 
      height: 37, 
    },
    normal: {
      backgroundColor: 'rgba(227, 226, 226, 0.4)',
    },
    pressed: {
      backgroundColor: 'rgba(227, 226, 226, 0.4)',
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
  

export default IconButtonClose;
