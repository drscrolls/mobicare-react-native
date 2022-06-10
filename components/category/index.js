import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';

const Category = ({category}) => {

    const {title, image } = category.item;
    const [Pressed, setPressed] = useState(0);

    return (
      <Pressable 
          onPress={() => {
            setPressed();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#15326f' : '#2a59bd',
            },
            styles.card,
          ]}>
          <CategoryIcon style={styles.icon} image={image}/>
          <Text style={styles.title}>
            {title}
          </Text>
        </Pressable>
    );
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 10,
      borderRadius: 7,
      borderWidth: 3,
    },
    card: {
      // backgroundColor: '#2a59bd',
      borderWidth: 0, 
      alignItems: 'center',
      alignSelf: 'center',
      color: '#fff',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      height: 70,
      width: 70,
      marginLeft: 10,
      marginRight: 0
    },
    title :{
      color: 'white',
      fontSize: 12,
      textAlign: 'center'
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2a59bd'
    }
  });
  

export default Category;
