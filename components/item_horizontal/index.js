import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';
import IconButtonBlue from '../icon_button_blue';

const ItemHorizontal = ({category}) => {

    const title = category.item.title;
    const image = category.item.image;

    return (
      <View style={styles.container}>
        <Image 
          source={{uri : require('../../assets/para.png')}}
          containerStyle={styles.image} />
        <View containerStyle={styles.textContainer}>
          <Text style={styles.title}>Paracetamol 250mg Suppositories</Text>
          <Text style={styles.price}>GHS 12.00</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <IconButtonBlue />
        </View>
      </View>
    );
    
}

const width_proportion = '50%';
const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginBottom: 10,
      // flex: 1
    },
    textContainer: {
      flexDirection: 'column',
      borderWidth: 0,
    },
    title :{
      color: '#555',
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 10,
      paddingTop: 2,
      width: '90%'
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
