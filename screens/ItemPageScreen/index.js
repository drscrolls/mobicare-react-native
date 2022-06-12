import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemImageCarousel from '../../components/carousel';
import HomeHeader from '../../components/home_header';
import ItemPageHeader from '../../components/itempage_header';



const ItemPageScreen = (props) => {

    return (
      <View style={styles.container}>
        <ItemPageHeader />
        <ItemImageCarousel />
        
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