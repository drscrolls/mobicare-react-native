import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'
import { SvgUri } from 'react-native-svg';

const IconButtonBlue = (props) => {
    const icon = props.icon ?? "https://im2.ezgif.com/tmp/ezgif-2-0021147349.png";

    return (
      <>
        <View style={[styles.container]}>
            <Image
              source={{ uri :icon }}
              fill="rgb(42, 89, 189)"
              width={15}
              height={15}
              style={styles.image}
            />
        </View>
      </>
    );
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(42, 89, 189, 0.31)',
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
