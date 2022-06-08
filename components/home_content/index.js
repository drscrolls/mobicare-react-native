import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';



const HomeContent = (props) => {
  
    return (
        <View style={styles.container}>
            <Text>Content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
});

export default HomeContent;
