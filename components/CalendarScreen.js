import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';



//Her er det kun utviklet design. Viewet skal vise kalender, slik at alle har oversikt over
//hva de ulike menneskene skal i kollektivet.
export default class CalendarScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Calendar</Text>



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
