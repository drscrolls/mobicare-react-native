import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ItemPageScreen from './screens/ItemPageScreen'
import IconButtonCart from './components/icon_button_cart';
import HomeHeader from './components/home_header';
import IconButtonWhite from './components/icon_button_white';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle :{
            fontWeight: '400',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation, route }) => ({
          title: 'Home',
          headerRight: () => (
            <IconButtonCart
              navigation={navigation}
            />
          ),
          headerRightContainerStyle: {
            marginEnd: 10
          },
          headerLeft: () => (
            <IconButtonWhite
              navigation={navigation}
            />
          ),
          headerLeftContainerStyle: {
            marginStart: 10
          },
        })}
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Cart' }}
      />
      <Stack.Screen 
       name="Item" 
       component={ItemPageScreen} 
       options={({ navigation, route }) => ({
        title: 'Item',
        headerRight: () => (
          <IconButtonCart
            navigation={navigation}
          />
        ),
        headerRightContainerStyle: {
          marginEnd: 10
        },
      })}
      />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
        <NavStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});