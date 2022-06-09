import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Header } from 'react-native-elements';
import Category from '../category';

const categories = [
    {
      title: 'Vitamins',
      image: "https://www.svgrepo.com/show/418928/medicine-pills-tablets.svg"
    },
    {
      title: 'Herbal',
      image: "https://www.svgrepo.com/show/418927/drugs-medicine-pills.svg"
    },
    {
      title: 'Dental',
      image: "https://www.svgrepo.com/show/418932/dropper-medical-pipette.svg"
    },
    {
      title: 'Skincare',
      image: "https://www.svgrepo.com/show/418941/aid-band-bandage.svg"
    },
    {
      title: 'Hairgrowth',
      image: "https://www.svgrepo.com/show/418926/beauty-bottle-box.svg"
    }
  ];

const CategoriesList = (props) => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <FlatList 
                data={categories} 
                horizontal={true}
                renderItem={(item) => <Category category={item} />}  />
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
