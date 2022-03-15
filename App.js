import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import Searchbar from './src/components/SearchBar';

// import SearchScreen from './src/screens/SearchScreen';
import Header from './src/components/Header';


export default function App() {
  return (
    <View>
      <Header title="Book Finder"/>
      {/* <SearchScreen /> */}
      <Searchbar></Searchbar>

    </View>
  );
}

