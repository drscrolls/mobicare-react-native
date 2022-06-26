import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import CategoriesList from '../../components/categories_list';
import HomeHeader from '../../components/home_header';
import HomeSearch from '../../components/home_search';
import ImageBanner from '../../components/image_banner';
import ItemsHorizontalList from '../../components/items_horizontal_list';

const HomeScreen = ({ navigation, route }) => {

    return (
      <View style={styles.container}>
        <ScrollView
          alwaysBounceVertical={true}
          // stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          >
              {/* <HomeHeader /> */}
              {/* <Button onPress={()=> {
                    navigation.push("Cart");
                  }
                } title="Test" /> */}
              <HomeSearch />
              <CategoriesList />
              <ImageBanner />
              <View>
                <ItemsHorizontalList navigation={navigation} />
              </View>

        </ScrollView>
            
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff'
  }
});


export default HomeScreen;