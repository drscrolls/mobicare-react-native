import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Category from '../category';

const categories = [
    {
      title: 'Vitamins',
      image: "https://im2.ezgif.com/tmp/ezgif-2-1a442f6709.png"
    },
    {
      title: 'Herbal',
      image: "https://im2.ezgif.com/tmp/ezgif-2-9589ef2709.png"
    },
    {
      title: 'Dental',
      image: "https://im2.ezgif.com/tmp/ezgif-2-5651dac875.png"
    },
    {
      title: 'Skincare',
      image: "https://im2.ezgif.com/tmp/ezgif-2-8a41db98e8.png"
    },
    {
      title: 'Hair',
      image: "https://im2.ezgif.com/tmp/ezgif-2-58f4e70fc9.png"
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
