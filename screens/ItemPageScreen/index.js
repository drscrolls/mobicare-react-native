import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemImageCarousel from '../../components/item_carousel';
import HomeHeader from '../../components/home_header';
import ItemPageHeader from '../../components/itempage_header';
import ItemDetails from '../../components/item_details';
import ItemDetailsOrderButtons from '../../components/item_details_order_buttons';



const ItemPageScreen = (props) => {

    return (
      <ScrollView style={styles.container}
        alwaysBounceVertical={true}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>

        <ItemPageHeader />
        <ItemDetails />
        <ItemDetailsOrderButtons />

      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute'
  },
  orderContainer: {
    bottom: 0,
    position: 'absolute'
  }
});


export default ItemPageScreen;