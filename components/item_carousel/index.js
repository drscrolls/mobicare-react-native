import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, Image, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';



export default class ItemImageCarousel extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            activeSlide:0,
            entries: [
                'https://images.moneycontrol.com/static-mcnews/2021/10/Apple-iPhone-13-4.jpg',
                'https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_brw/public/field/image/2021/09/iphone-13-design-hero.jpeg',
                'https://www.91-cdn.com/hub/wp-content/uploads/2021/10/iPhone-13-review-003.jpg',
              ]
      }
    }


    _renderItem ({item, index}) {
        return  <View style={{
                    width: '100%'}}>
                    <Image
                        style={{
                            height: 250,
                            width: '100%'}}
                     source={{uri: item}} />
                </View>
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              tappableDots={true}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'white' }}
              dotStyle={{
                  width: 20,
                  height: 5,
                  borderRadius: 5,
                  backgroundColor: '#4d77e3'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#b5cdfb'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render () {
        return (
            <View>
                <Carousel
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  sliderWidth={Dimensions.get('window').width}
                  itemWidth={Dimensions.get('window').width}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </View>
        );
    }
}