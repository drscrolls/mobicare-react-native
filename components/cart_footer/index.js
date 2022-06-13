import React, { Component, useState } from 'react'
import { Text, View, StyleSheet,Pressable, Button } from 'react-native'
import { Card, Icon, Image, Badge } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CartFooter = () => {

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
              <Text style={styles.whiteText}>Checkout</Text>
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
      flexDirection: 'row',
      flex: 1
    },
    buttonContainer: {
      // backgroundColor: '#466fdd',
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      color: 'white',
      flex: 1,
      marginRight: 10
    },
    addCartContainer: {
      // backgroundColor: '#466fdd',
      padding: 13,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      // width: ,
      // flex: 0.2
    },
    whiteText: {
      color: 'white',
      fontWeight: '600'
    }
  });
  

export default CartFooter;
