import React, { Component } from 'react';
import { View, Text,RefreshControl, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import CategoriesList from '../../components/categories_list';
import HomeHeader from '../../components/home_header';
import HomeSearch from '../../components/home_search';
import IconButtonCart from '../../components/icon_button_cart';
import ImageBanner from '../../components/image_banner';
import ItemsHorizontalList from '../../components/items_horizontal_list';

const HomeScreen = ({ navigation, route }) => {


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        alwaysBounceVertical={true}
        // stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
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