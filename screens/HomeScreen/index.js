import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import HomeContent from '../../components/home_content';
import HomeHeader from '../../components/home_header';
import HomeSearch from '../../components/home_search';

const HomeScreen = (props) => {

    return (
      <View style={styles.container}>
        <HomeHeader />
        <HomeSearch />
        <HomeContent />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});


export default HomeScreen;