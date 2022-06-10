import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Category from '../category';
import ItemHorizontal from '../item_horizontal';

const items = [
    {
      title: 'Paracetamol 250mg Suppositories',
      price: 2.65,
      image: "https://www.typharm.com/wp-content/uploads/2020/07/Paracetamol-250mg-Suppositories.png"
    },
    {
      title: 'Gebedol Forte Tablets',
      price: 10.00,
      image: "https://countrymedicalpharmacy.com/wp-content/uploads/2020/11/Gebedol-Forte_Tablets.jpg"
    },
    {
      title: 'Enafen Ibuprofen Brufen 400mg',
      price: 20.00,
      image: "https://countrymedicalpharmacy.com/wp-content/uploads/2020/10/Enafen-Ibuprofen-Brufen-400-MG.jpg"
    },
    {
      title: 'Paracetamol Caplets 500mg',
      price: 5.99,
      image: "https://julitetpharmacy.com/wp-content/uploads/2021/02/PARA-UK.jpg"
    },
    
  ];

const ItemsHorizontalList = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bestsellers</Text>
            <FlatList 
                scrollEnabled={false}
                data={items} 
                renderItem={(item) => <ItemHorizontal category={item} />} 
                keyExtractor={(item, index) => index}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
