import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import SearchScreen from './src/screens/SearchScreen';


export default function App() {
  return (
    <View>
      <Header title="Book Finder"/>
      <SearchScreen />
    </View>
  );
}

