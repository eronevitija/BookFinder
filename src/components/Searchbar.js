import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


const Searchbar = () => {
    
    const [search, setSearch] = useState('');

    return(
        <View style={styles.container}> 
            <AntDesign name="search1" size={20} color="black"/>
            <TextInput style={styles.txtInput} placeholder="search" />


        </View>
    )
};

const styles = StyleSheet.create({

    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:50,
        
    },
    txtInput:{
        flex:1,
        height:40,
        margin:12,
        borderBottomWidth:1,

    }
});

export default Searchbar;