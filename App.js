import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ItemPageScreen from './screens/ItemPageScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      
      {/* <ItemPageScreen /> */}
      <HomeScreen />
      <StatusBar />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
