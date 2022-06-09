import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header, SearchBar } from 'react-native-elements';


export default class HomeSearch extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <View style={styles.searchContainer}>
            <Text style={styles.header}>Order your medicines</Text>
            <SearchBar
                lightTheme={true}
                round={true}
                containerStyle={styles.container}
                placeholder="Search"
                platform='android'
                inputContainerStyle={styles.innerContainer}
                onChangeText={this.updateSearch}
                value={search}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    searchContainer:{
        paddingHorizontal: 10
    },  
    container : {
        backgroundColor: "#fff", 
        borderColor : "#fff"
    },
    innerContainer : {
        backgroundColor: "#eee",
        borderRadius: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 10
    }
});
