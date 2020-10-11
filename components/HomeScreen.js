import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';



//Home skal være en oversikt over de rengjøringsfunksjonene som appen kan tilgå.
//Her er det per nå kun utviklet design, så det vil forekomme vidreutvikling
export default class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Let's Clean!</Text>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.buttonText}>Rengjøring</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.buttonText}>Vaske tøj</Text>
                </TouchableOpacity>


            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBF1EE',
    },


    text: {
        fontSize: 70,
        color:'#5FB8B2',
        bottom:150,
        right:20,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#47525E',
        width: 250,
        height: 54,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 25,
        marginTop:7,
    },
    buttonText:{
        fontSize: 20,
        color:'white',
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

