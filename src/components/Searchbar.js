import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native";


const Searchbar = () => {
  return(
      <View style={styles.container}>
          <AntDesign name="search1" size={25} color="black" />
          <TextInput style={styles.txtInput} placeholder="search"/>
      </View>
  )
    
};

const styles = StyleSheet.create({
 container: {
     backgroundColor: "#E9DAC1",
     height:50,
     borderRadius:5,
     marginHorizontal:10,
 },
 txtInput: {
     flex:1,
 }
});

export default Searchbar;