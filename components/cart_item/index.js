import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Icon, Image } from 'react-native-elements'
import CategoryIcon from '../category_icon';
import IconButtonBlue from '../icon_button_blue';
import WhiteButton from '../white_button';

const CartItem = ({category}) => {

    const {title, price} = category.item;
    const image = category.item.image ;

    return (
      <View style={styles.container}>
        <Image 
          source={{uri : image }}
          containerStyle={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>GHS {price}</Text>
        </View>

        <View style={styles.quantityContainer}>
            <WhiteButton 
              icon="remove" 
              hasOutline={false}
              iconSize={16}
              buttonHeight={29}
              buttonWidth={29}
              iconColor={"#5b79c3"}
              backgroundColor={"#e5f0fe"}
              pressedBackgroundColor={"#9eb8e1"}
              onPressEvent={() => alert("presssed button")}
            />
              
              <Text style={styles.quantityText}>1</Text>

            <WhiteButton 
              icon="ios-add-outline" 
              iconSize={16}
              buttonHeight={29}
              buttonWidth={29}
              iconColor={"#5b79c3"}
              backgroundColor={"#e5f0fe"}
              pressedBackgroundColor={"#9eb8e1"}
              onPressEvent={() => alert("presssed button")}
              />
          
         

            
        </View>
        
      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginBottom: 10,
      // display: 'flex',
      alignSelf: 'stretch',
      // flex: 1,
      width: '100%',
    },
    textContainer: {
      flexDirection: 'column',
      borderWidth: 0,
      paddingRight: 50,
      flex: 1
    },
    title :{
      color: '#444',
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 10,
      paddingTop: 2,
      // width: '90%'
    },
    price :{
      // color: 'rgb(80, 117, 221)',
      color: '#333',
      fontSize: 11,
      fontWeight: '600',
      marginLeft: 10,
      marginTop: 2
      // position: 'absolute',
      // bottom: 5
    },
    quantityContainer :{
      marginLeft: 10,
      marginTop: 5,
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#e5f0fe',
      padding: 2,
      borderRadius: 10,
      alignSelf: 'center'
    },
    quantityText :{
      marginHorizontal: 10,
      fontSize: 14,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 4.5,
      color: "#333",
      fontWeight: 'normal'
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 5,
      backgroundColor: '#f9f9f9'
    }
  });
  

export default CartItem;
