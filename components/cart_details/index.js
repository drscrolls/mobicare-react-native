import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable, FlatList } from 'react-native'
import { Button, Card, Icon, Image, Badge } from 'react-native-elements'
import CartItem from '../cart_item';
import ItemImageCarousel from '../item_carousel';
import ItemHorizontal from '../item_horizontal';


const items = [
  {
    title: 'Paracetamol 250mg Suppositories',
    price: 2.65,
    image: "https://www.typharm.com/wp-content/uploads/2020/07/Paracetamol-250mg-Suppositories.png"
  },
  {
    title: 'Gebedol Forte Tablets',
    price: 10.00,
    image: "https://countrymedicalpharmacy.com/wp-content/uploads/2020/11/Gebedol-Forte_Tablets.jpg"
  },
  {
    title: 'Enafen Ibuprofen Brufen 400mg',
    price: 20.00,
    image: "https://countrymedicalpharmacy.com/wp-content/uploads/2020/10/Enafen-Ibuprofen-Brufen-400-MG.jpg"
  },
  {
    title: 'Paracetamol Caplets 500mg',
    price: 5.99,
    image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
  },
  
];


const CartDetails = () => {

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.header}>Cart</Text>

          <View style={styles.normalContainer}>
              <FlatList 
                scrollEnabled={false}
                data={items} 
                renderItem={(item) => <CartItem category={item} />} 
                keyExtractor={(item, index) => index}  />
          </View>


          <View style={styles.normalContainer}>
              <Text style={styles.header}>Delivery notes</Text>
              <Text style={styles.descriptionText}> 
                Paracetamol is a common painkiller used to treat aches and pain. 
                It can also be used to reduce a high temperature.

                It's available combined with other painkillers and anti-sickness medicines. 
                It's also an ingredient in a wide range of cold and flu remedies.
              </Text>
          </View>


          <View style={styles.normalContainer}>
              <Text style={styles.header}>Order summary</Text>
              <View style={styles.orderSummaryContainer}>
                <Text style={styles.darkgreyText}>Subtotal</Text>
                <Text style={styles.summaryItem}>GHS 35.00</Text>
              </View>
              <View style={styles.orderSummaryContainer}>
                <Text style={styles.darkgreyText}>Total</Text>
                <Text style={[styles.summaryItem, {fontSize: 16}]}>GHS 50.00</Text>
              </View>
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
    orderSummaryContainer: {
      flexDirection: 'row',
      marginTop: 10
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
    darkgreyText: {
      color: '#888',
      fontWeight: '500',
    },
    summaryItem: {
      position: 'absolute',
      right: 10,
      color: '#333',
      fontWeight: '500',
      textAlign: "right",
      justifyContent : "flex-end",
      alignItems: "flex-end"
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
  

export default CartDetails;
