import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'
import ItemImageCarousel from '../item_carousel';

const ItemDetails = () => {

    return (
      <>
        <ItemImageCarousel />
        <View style={styles.container}>
          <Text style={styles.header}>Enafen Ibuprofen Brufen 400mg</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.price}>GHS 3.00</Text>
            {/* <View style={styles.ratingContainer}>
              <Text style={styles.price}>GHS 3.00</Text>
            </View> */}
          </View>
          <View style={styles.buttonContainer}>
              <Text style={styles.blueText}>In Stock</Text>
          </View>

          <View style={styles.normalContainer}>
              <Text style={styles.blackTextSmall}>Manufacturer</Text>
              <Text style={styles.blueTextSmall}>Bayer</Text>
          </View>

          <View style={styles.normalContainer}>
              <Text style={styles.blackTextSmall}>Active Substance</Text>
              <Text style={styles.blueTextSmall}>Deslordadine</Text>
          </View>

          <View style={styles.normalContainer}>
              <Text style={styles.blackTextSmall}>Description</Text>
              <Text style={styles.descriptionText}> 
                Paracetamol is a common painkiller used to treat aches and pain. 
                It can also be used to reduce a high temperature.

                It's available combined with other painkillers and anti-sickness medicines. 
                It's also an ingredient in a wide range of cold and flu remedies.
              </Text>
          </View>

        </View>
      </>
      
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
      fontWeight: '500'
    },
    blackTextSmall: {
      color: '#333',
      fontWeight: '500',
      fontSize: 13
    },
    blueTextSmall: {
      color: '#6086e6',
      fontWeight: '500',
      fontSize: 13,
      marginTop: 2
    },
    descriptionText: {
      color: '#444',
      fontWeight: '400',
      fontSize: 13,
      marginTop: 2
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }
  });
  

export default ItemDetails;
