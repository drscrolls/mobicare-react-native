import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ItemPageScreen from './screens/ItemPageScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator 
        id="MainNavigation" 
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }}/>
        <Stack.Screen name="Item" component={ItemPageScreen} options={{ title: 'Item' }}/>
      </Stack.Navigator>
  );
}

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
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Cart' }}
      />
      <Stack.Screen 
       name="Item" 
       component={ItemPageScreen} 
       options={{ title: 'Item' }}
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