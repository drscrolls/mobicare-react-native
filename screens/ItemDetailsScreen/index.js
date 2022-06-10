import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ItemDetailsHeader from '../../components/item_details_header';


const ItemDetailsScreen = (props) => {

    return (
      <View style={styles.container}>
        <ScrollView
          alwaysBounceVertical={true}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
              
              <ItemDetailsHeader />

        </ScrollView>
            
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});


export default ItemDetailsScreen;