import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemImageCarousel from '../../components/item_carousel';
import HomeHeader from '../../components/home_header';
import ItemPageHeader from '../../components/itempage_header';
import ItemDetails from '../../components/item_details';
import ItemDetailsOrderButtons from '../../components/item_details_order_buttons';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import CartDetails from '../../components/cart_details';
import CartFooter from '../../components/cart_footer';


const CartScreen = ({navigation}) => {

    return (
      <ScrollView style={styles.container}
        alwaysBounceVertical={true}
        makeScrollable={true}
        stickyHeaderIndices={[2]}
        invertStickyHeaders={true}
        showsVerticalScrollIndicator={false}>

        <CartDetails />
        <CartFooter />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff'
  },
  orderContainer: {
    bottom: 0,
    position: 'absolute'
  }
});


export default CartScreen;