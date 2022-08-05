import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Homepage from './src/screens/Homepage'

export default function App() {

  let [fontsLoaded] = useFonts({
    'NotoSansKR' : require('./assets/fonts/NotoSansKR-Regular.otf')
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }else {
    return (
        <Homepage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
