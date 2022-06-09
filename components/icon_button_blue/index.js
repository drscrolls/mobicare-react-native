import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'

const IconButtonBlue = (props) => {
    const icon = props.icon ?? "https://www.svgrepo.com/show/352445/shopping-basket.svg";

    return (
      <>
        <View style={[styles.container]}>
            <Image
              source={{ uri: icon }}
              style={styles.image}
            />
            <Badge 
              containerStyle={styles.badgeContainer} 
              badgeStyle={styles.badge} 
              textStyle={styles.badgeText}
              value="5" 
              status="primary" />
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
  

export default IconButtonBlue;
