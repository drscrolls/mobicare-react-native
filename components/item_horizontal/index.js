import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';
import IconButtonBlue from '../icon_button_blue';

const ItemHorizontal = ({navigation, route, category}) => {

    const {title, price} = category.item;
    const image = category.item.image ;

    // console.log("image", image);
    return (
      <Pressable 
        onPress={() => {navigation.push("Item")}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#ededed'
              : 'white'
          },
          styles.wrapperCustom
        ]}
        >
        <View style={styles.container}>
        <Image 
          source={{uri : image }}
          containerStyle={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>GHS {price}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <IconButtonBlue />
        </View>
      </View>
      </Pressable>
      
    );
    
}

const styles = StyleSheet.create({
    wrapperCustom: {
      height: 70,
      marginBottom: 10,
      borderRadius: 5
    },
    container: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      display: 'flex',
      flex: 1,
      width: '100%',
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
      bottom: 5
    },
    image: {
      height: "100%",
      width: 80,
      borderRadius: 5,
      backgroundColor: '#f9f9f9'
    }
  });
  

export default ItemHorizontal;
