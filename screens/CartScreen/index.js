import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemImageCarousel from '../../components/item_carousel';
import HomeHeader from '../../components/home_header';
import ItemPageHeader from '../../components/itempage_header';
import ItemDetails from '../../components/item_details';
import ItemDetailsOrderButtons from '../../components/item_details_order_buttons';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import CartDetails from '../../components/cart_details';


const CartScreen = (props) => {

    return (
      <StickyHeaderFooterScrollView style={styles.container}
        alwaysBounceVertical={true}
        makeScrollable={true}
        fitToScreen={true}
        additionalHeightReserve={160}
        renderStickyHeader={() => <ItemPageHeader />}
        renderStickyFooter={() => <ItemDetailsOrderButtons />}
        showsVerticalScrollIndicator={false}>

        <CartDetails />

      </StickyHeaderFooterScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  orderContainer: {
    bottom: 0,
    position: 'absolute'
  }
});


export default CartScreen;