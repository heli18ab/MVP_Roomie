import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



//Her er det ikke utviklet noe enda - men tanken er at det skal være et view, hvor
//brukere kan endre passord, brukernavn eller andre opplysninger.
export default class SettingsScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Personal Settings</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBF1EE',
    },

    text: {
        fontSize: 70,
        color:'#5FB8B2',
        bottom:150,
        right:20,
    },




});
