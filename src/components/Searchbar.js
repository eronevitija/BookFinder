import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';


const Searchbar = () => {
    
    const [search, setSearch] = useState('');

    return(
        <View style={styles.container}> 
           <Ionicons name="search-sharp" size={24} color="black" style={styles.searchIcon} />

            <TextInput style={styles.txtInput} placeholder="Search" />


            

        </View>
    )
};

const styles = StyleSheet.create({

    container:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
      
    },
    searchIcon:{
        marginTop:50
    },
    txtInput:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        border:'2px solid silver',
        padding:5,
        width:'40%'
        

        
        // marginLeft:10,
        // width:'20%',
        // fontSize:'20',
        // flex:1,
        // padding:10,
        // borderRadius:50,
        // border:'2px solid silver'

    }
});

export default Searchbar;