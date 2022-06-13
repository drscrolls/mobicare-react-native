import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'

const ItemDetailsOrderButtons = () => {

    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.blueText}>In Stock</Text>
    </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10
    },
    header: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
        color: '#333'
    },
    flexContainer : {
      // display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      width: '100%'
    },
    price :{
      color: '#466fdd',
      // color: '#333',
      fontSize: 17,
      fontWeight: '600',
    },
    buttonContainer: {
      backgroundColor: '#e7f0ff',
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: 10,
      
    },
    normalContainer:{
      marginTop: 15
    },
    blueText: {
      color: '#6086e6',
      fontWeight: 500
    },
    blackTextSmall: {
      color: '#333',
      fontWeight: 500,
      fontSize: 13
    },
    blueTextSmall: {
      color: '#6086e6',
      fontWeight: 500,
      fontSize: 13,
      marginTop: 2
    },
    descriptionText: {
      color: '#444',
      fontWeight: 400,
      fontSize: 13,
      marginTop: 2
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }
  });
  

export default ItemDetailsOrderButtons;
