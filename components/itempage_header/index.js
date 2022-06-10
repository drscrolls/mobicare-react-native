import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import IconButtonCart from '../icon_button_cart'
import IconButtonClose from '../icon_button_close'


const ItemPageHeader = () => {
  
    return (
        <View>
            <Header 
                backgroundColor='white'
                barStyle={{backgroundColor: 'white', color: '#000'}}
                // barStyle="light-content" // or directly
                // containerStyle={{borderWidth: 0, borderColor: 'white'}}
                leftComponent={<IconButtonClose />}
                // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={<IconButtonCart />}
                // leftContainerStyle={{alignSelf: 'left'}}
                containerStyle={{ borderBottomColor:'#fff',borderBottomWidth:1 }}
            />
        </View>
    )
}




export default ItemPageHeader;
