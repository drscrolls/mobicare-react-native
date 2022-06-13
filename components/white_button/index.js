import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Pressable} from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';


const WhiteButton = (props) => {
    
    const {icon, outlineColor, hasOutline, buttonWidth, buttonHeight, iconSize, iconColor, backgroundColor, pressedBackgroundColor, onPressEvent} = props;
    const [Pressed, setPressed] = useState(0);

    return (
        <Pressable 
          onPress={() => {
            setPressed();
            onPressEvent();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? pressedBackgroundColor : backgroundColor,
              borderColor: outlineColor,
              borderWidth: hasOutline ? 1 : 0,
              width: buttonWidth,
              height: buttonHeight,
            },
            styles.container,
          ]}>
            <Ionicons name={icon} size={iconSize} color={iconColor} />
        </Pressable>
    );
    
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
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
  

export default WhiteButton;
