import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../../components/home_header';
import ImageCarousel from '../../components/image_carousel';
import ItemPageHeader from '../../components/itempage_header';



const ItemPageScreen = (props) => {

    return (
      <View style={styles.container}>
        <ItemPageHeader />
        {/* <ImageCarousel /> */}
        {/* <ScrollView
          alwaysBounceVertical={true}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
              

        </ScrollView> */}
             
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});


export default ItemPageScreen;