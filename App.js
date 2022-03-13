/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
      <View style={styles.container}>
      <Text style={{textAlign:'center', backgroundColor:'#2980b9', padding:15, color:'#fff', fontSize:20}}>HelloWorld2.3</Text>
      <View style={{flex:2, alignSelf:'center'}}>
      <Text style={{textAlign:'center', justifyContent:'center', marginTop:'50%', fontSize:15}}>Hello World !  </Text>
      </View>
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
