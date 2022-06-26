import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemPageHeader from '../../components/itempage_header';
import ItemDetails from '../../components/item_details';
import ItemDetailsOrderButtons from '../../components/item_details_order_buttons';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';


const ItemPageScreen = ({navigation}) => {

    return (
      <ScrollView style={styles.container}
        alwaysBounceVertical={true}
        makeScrollable={true}
        fitToScreen={true}
        additionalHeightReserve={160}
        renderStickyHeader={() => <ItemPageHeader />}
        renderStickyFooter={() => <ItemDetailsOrderButtons />}
        showsVerticalScrollIndicator={false}>

        <ItemDetails />

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


export default ItemPageScreen;