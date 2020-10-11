import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";




export default class SettingsScreen extends Component {
    static navigationOptions= {
        title:'Settings'
    }
    handleGoToDetails = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Details');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Go to Details!</Text>

                <Button style={styles.button} title="Take me there!" onPress={this.handleGoToDetails} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'green',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },

    button:{
        backgroundColor:'pink',
    },
});
