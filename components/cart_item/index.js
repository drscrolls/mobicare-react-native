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

        <View style={styles.quantityContainer}>
            <WhiteButton 
              icon="ios-add-outline" 
              hasOutline={true}
              iconSize={12}
              buttonHeight={23}
              buttonWidth={23}
              outlineColor={"#f2f2f2"}
              iconColor={"black"}
              backgroundColor={"white"}
              pressedBackgroundColor={"#ededed"}
              onPressEvent={() => alert("presssed button")}
              />
              <Text style={styles.quantityText}>1</Text>
            <WhiteButton 
              icon="remove" 
              hasOutline={true}
              iconSize={12}
              buttonHeight={23}
              buttonWidth={23}
              outlineColor={"#f2f2f2"}
              iconColor={"black"}
              backgroundColor={"white"}
              pressedBackgroundColor={"#ededed"}
              onPressEvent={() => alert("presssed button")}
            />
              
          
         

            
        </View>
        </View>
        <View style={{ position: 'absolute', right: 6, bottom: 8 }}>
            <WhiteButton 
                icon="trash" 
                hasOutline={false}
                iconSize={15}
                buttonHeight={27}
                buttonWidth={27}
                outlineColor={"#f2f2f2"}
                iconColor={"#666"}
                backgroundColor={"#f2f2f2"}
                pressedBackgroundColor={"#ddd"}
                onPressEvent={() => alert("delete button")}
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
      flex: 0.85
    },
    title :{
      color: '#555',
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
      width: "100%",
      flexDirection: 'row',
      position: 'absolute',
      bottom: 8
    },
    quantityText :{
      marginHorizontal: 15,
      fontSize: 13,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2
    },
    image: {
      height: 90,
      width: 90,
      borderRadius: 5,
      backgroundColor: '#f9f9f9'
    }
  });
  

export default CartItem;
