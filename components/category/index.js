import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const Category = ({ props }) => {
    return (
      <View>
          <Button onPress={() => alert("hello world")} type="solid" title={'hellor'}  />
      </View>
    )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderColor: 'black',
      borderRadius: 7,
      borderWidth: 3,
    },
  });
  

export default Category;
