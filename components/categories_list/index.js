import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Category from '../category';

const categories = [
    {
      title: 'Vitamins',
      image: "https://img.icons8.com/ios/344/pill.png"
    },
    {
      title: 'Herbal',
      image: "https://img.icons8.com/ios/344/herbal-medicine.png"
    },
    {
      title: 'Dental',
      image: "https://img.icons8.com/ios/344/tooth.png"
    },
    {
      title: 'Skincare',
      image: "https://img.icons8.com/ios/344/antiseptic-cream.png"
    },
    {
      title: 'Hair',
      image: "https://img.icons8.com/ios/344/eyelash.png"
    }
  ];

const CategoriesList = (props) => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <FlatList 
                data={categories} 
                horizontal={true}
                renderItem={(item) => <Category category={item} />} 
                keyExtractor={(item, index) => index} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    title: {
      fontSize: 12,
      paddingTop: 15,
      paddingHorizontal: 10,
      fontWeight: '600',
      color: '#333'
    }
});

export default CategoriesList;
