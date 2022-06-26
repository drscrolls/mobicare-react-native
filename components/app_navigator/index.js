import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import ItemPageScreen from '../../screens/ItemPageScreen';

const Stack = createNativeStackNavigator();

