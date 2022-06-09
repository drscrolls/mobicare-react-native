import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import IconButtonWhite from '../icon_button_white'
import IconButtonBlue from '../icon_button_blue'
import IconButtonCart from '../icon_button_cart'


const HomeHeader = () => {
  
    return (
        <>
            <Header 
                backgroundColor='white'
                barStyle={{backgroundColor: 'white', color: '#000'}}
                containerStyle={{borderWidth: 0, borderColor: 'white'}}
                leftComponent={<IconButtonWhite />}
                // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={<IconButtonCart />}
                leftContainerStyle={{alignSelf: 'left'}}
            />
        </>
    )
}


export default HomeHeader;
