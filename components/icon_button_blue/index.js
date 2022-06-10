import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'
import { SvgUri } from 'react-native-svg';

const IconButtonBlue = (props) => {
    const icon = props.icon ?? "https://img.icons8.com/ios-glyphs/344/shopping-basket.png";
    const [Pressed, setPressed] = useState(0);

    return (
      <Pressable 
          onPress={() => {
            setPressed();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgba(42, 89, 189, 0.73)' : 'rgba(42, 89, 189, 0.31)',
            },
            styles.container,
          ]}>
            <Image
              source={{ uri :icon }}
              fill="rgb(42, 89, 189)"
              width={15}
              height={15}
              style={styles.image}
            />
        </Pressable>
    );
    
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 30, 
      height: 30, 
      position: 'absolute'
    },
    image: {
      tintColor: "rgb(42, 89, 189)",
      width: 15, 
      height: 15, 
      justifyContent: 'center', 
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    badgeContainer: {
      top: 0,
      right: -5,
      position: 'absolute'
    },
    badge: {
      backgroundColor: 'rgb(42, 89, 189)',
      borderColor: 'rgb(42, 89, 189)',
    },
    badgeText: {
      fontSize: 12
    }
  });
  

export default IconButtonBlue;
