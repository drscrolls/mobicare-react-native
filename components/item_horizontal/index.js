import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';
import IconButtonBlue from '../icon_button_blue';

const ItemHorizontal = ({category}) => {

    const {title, image, price} = category.item;

    return (
      <View style={styles.container}>
        <Image 
          source={{uri : image}}
          containerStyle={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>GHS {price}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <IconButtonBlue />
        </View>
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginBottom: 10,
      display: 'flex',
      flex: 1,
      width: '100%'
    },
    textContainer: {
      flexDirection: 'column',
      borderWidth: 0,
      paddingRight: 50,
      flex: 0.85
    },
    title :{
      color: '#555',
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 10,
      paddingTop: 2,
      // width: '90%'
    },
    price :{
      // color: 'rgb(80, 117, 221)',
      color: '#333',
      fontSize: 11,
      fontWeight: '600',
      marginLeft: 10,
      position: 'absolute',
      bottom: 3
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 5,
      backgroundColor: '#f9f9f9'
    }
  });
  

export default ItemHorizontal;
