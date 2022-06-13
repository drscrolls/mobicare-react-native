import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ItemPageScreen from './screens/ItemPageScreen';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://658874c30f0e49c0a9868ee54fef031c@o1286227.ingest.sentry.io/6499317',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});


export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      
      <ItemPageScreen />
      {/* <HomeScreen /> */}
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
