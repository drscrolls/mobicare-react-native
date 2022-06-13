import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable, Button } from 'react-native'
import { Card, Icon, Image, Badge } from 'react-native-elements'

const ItemDetailsOrderButtons = () => {

  const [Pressed, setPressed] = useState(0);

    return (
      <View style={styles.container}>
        <Pressable 
              onPress={() => {
                setPressed();
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#3352a6' : '#466fdd' ,
                },
                styles.buttonContainer,
              ]}>
              <Text style={styles.whiteText}>Order now</Text>
        </Pressable>
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: 10,
    },
    buttonContainer: {
      // backgroundColor: '#466fdd',
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      color: 'white',
      
    },
    whiteText: {
      color: 'white',
      fontWeight: '600'
    }
  });
  

export default ItemDetailsOrderButtons;
