import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Category from '../category';
import ItemHorizontal from '../item_horizontal';

const items = [
    {
      title: 'Paracetamol',
      price: 2.65,
      image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
    },
    {
      title: 'Paracetamol',
      price: 2.65,
      image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
    },
    {
      title: 'Paracetamol',
      price: 2.65,
      image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
    },
    {
      title: 'Paracetamol',
      price: 2.65,
      image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
    },
    
  ];

const ItemsHorizontalList = (props) => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bestsellers</Text>
            <FlatList 
                data={items} 
                renderItem={(item) => <ItemHorizontal category={item} />}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
      fontSize: 12,
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: '600',
      color: '#333'
    }
});

export default ItemsHorizontalList;
