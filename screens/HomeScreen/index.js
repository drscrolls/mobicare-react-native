import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeContent from '../../components/home_content';
import HomeHeader from '../../components/home_header';
import HomeSearch from '../../components/home_search';

const HomeScreen = (props) => {

    return (
      <View>
        <HomeHeader />
        <HomeSearch />
        <HomeContent />
      </View>
    );
}

export default HomeScreen;