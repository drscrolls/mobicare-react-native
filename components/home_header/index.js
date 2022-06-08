import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'


const HomeHeader = () => {
  
    return (
        <View>
         <Header
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle={"light-content"} // or directly
            // leftComponent={<MyCustomLeftComponent />}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            containerStyle={{
                backgroundColor: '#3D6DCC',
                justifyContent: 'space-around',
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default HomeHeader;
