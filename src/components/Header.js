import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
    return(
        <View style={styles.container}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        </View>
    )};



const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    txtTitle:{
        backgroundColor:'black',
        width:'100%',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        fontSize:20
    }
});

export default Header;