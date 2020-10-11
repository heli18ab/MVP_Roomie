import React, { Component } from 'react';
import { Text,  View, StyleSheet } from 'react-native';

export default class WeShare extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Økonomi</Text>



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
