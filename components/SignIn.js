import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput,Image} from 'react-native';
import HomeScreen from "./HomeScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {AntDesign} from "@expo/vector-icons";
import WeShare from "./WeShare";
import CalenderScreen from "./CalendarScreen";
import SignUpScreen from "./SignUpScreen";
import SettingsScreen from "./SettingsScreen";
import {createAppContainer} from "react-navigation";
import * as firebase from 'firebase';





// Denne TabNavigator holder styr på det ytterste nivået av navigasjon i appen. Det er altså menyen som ligger nede i systemet, og skal
// hjelpe med å navigere.
const TabNavigator = createBottomTabNavigator(
    {
        /*Tilføj routes*/
        Home: {
            /*HsVilket view skal loades*/
            screen: HomeScreen,
            /*Instillinger til navigation*/
            navigationOptions: {
                /*Navn*/
                tabBarLabel:"Clean",
                /*Ikon*/
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="home" size={24} color="black" />                )
            },
        },

        Wallet: {
            screen: WeShare,
            navigationOptions: {
                tabBarLabel:"Wallet",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="wallet" size={24} color="black" />
                )
            },
        },


        Calender: {
            screen: CalenderScreen,
            navigationOptions: {
                tabBarLabel:"Calendar",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="calendar" size={24} color="black" />         )
            },
        },


        AddUser: {
            screen: SignUpScreen,
            navigationOptions: {
                tabBarLabel:"AddUser",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="adduser" size={24} color="black" />                )
            },
        },

        /*Navn på Route*/
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel:"Settings",
                tabBarIcon: ({ tintColor }) => (
                    <AntDesign name="setting" size={24} color="black" />                )
            },
        },



    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: '#5FB8B2',
            inactiveTintColor: 'black',
            size:40
        }
    }

)



const AppBottomNav = createAppContainer(TabNavigator);




//funksjonene nedenfor har tilhensikt å ta input fra inputfelt, og sjekke om dette stemmer med en bruker vi har i firebase, slik at
//man skal få tilgang til programmet og systemet.

//om man har tilgang loades også menyen som er laget over

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
        isLoggedIn: false
    };

    loginUser = async () => {
        const { email, password } = this.state;
        console.log('hei');
        try {
            // Here the data is passed to the service and we wait for the result
            const output =  await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(output);
            this.setState({ isLoggedIn: true });
        } catch (error) {
            console.log(error.message);
            alert('Feil brukernavn eller passord')
            this.setState({ isLoggedIn: false });
        }
    };
    componentDidMount() {
        this.loginUser
    }



    render(){
        if(this.state.isLoggedIn){
            return(
                <AppBottomNav/>
            )
        }else{

            return (
                <View style={styles.container}>

                    <Text style={styles.roomiesText}>ROOMIE</Text>

                    <Image style={styles.welcomePic} source={require('../assets/LogoKollektiv.png')}></Image>
                    <Text style={styles.titleText}>Sign in</Text>

                    <TextInput
                        value={this.state.email}
                        keyboardType = 'email-address'
                        onChangeText={(email) => this.setState({ email })}
                        placeholder='Email'
                        placeholderTextColor = 'black'
                        style={styles.input}
                    />

                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor = 'black'
                        style={styles.input}
                    />


                    <TouchableOpacity
                        style={[styles.signInButtons, ]}
                        onPress={this.loginUser} >
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>


                </View>
            );
        }



    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DBF1EE',
    },





    roomiesText:{
        fontSize: 50,
        fontWeight:'bold',

        color:'#5FB8B2',
        bottom:125,

    },

    titleText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    signInButtons: {
        alignItems: 'center',
        backgroundColor: '#47525E',
        width: 250,
        height: 54,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginTop:7,
    },
    buttonText:{
        fontSize: 20,
        color:'white',
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },


    input: {
        width: 250,
        fontSize: 15,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 10,

    }, welcomePic: {
        width: 80,
        height: 80,
    },



});
