import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'
import { SvgUri } from 'react-native-svg';

const IconButtonCart = ({navigation}) => {


  return (
        <Pressable 
          onPress={() => {
            navigation.push("Cart");
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgba(42, 89, 189, 0.73)' : 'rgba(42, 89, 189, 0.31)',
            },
            styles.container,
          ]}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-glyphs/344/shopping-basket.png" }}
              fill={"rgb(42, 89, 189)"}
              width={18} 
              height={18} 
              style={styles.image}
            />
            <Badge 
              containerStyle={styles.badgeContainer} 
              badgeStyle={styles.badge} 
              textStyle={styles.badgeText}
              value="5" 
              status="primary" />
        </Pressable>
    );
    
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'rgba(42, 89, 189, 0.31)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 37, 
      height: 37, 
      position: 'absolute'
    },
    image: {
      tintColor: "rgb(42, 89, 189)",
      width: 18, 
      height: 18, 
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
  

export default IconButtonCart;
