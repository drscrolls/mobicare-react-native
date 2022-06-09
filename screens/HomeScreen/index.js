import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CategoriesList from '../../components/categories_list';
import HomeHeader from '../../components/home_header';
import HomeSearch from '../../components/home_search';
import ImageBanner from '../../components/image_banner';
import ItemsHorizontalList from '../../components/items_horizontal_list';

const HomeScreen = (props) => {

    return (
      <View style={styles.container}>
        <HomeHeader />
        <HomeSearch />
        <CategoriesList />
        <ImageBanner />
        <ItemsHorizontalList />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});


export default HomeScreen;