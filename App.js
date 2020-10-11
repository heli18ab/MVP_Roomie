import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./components/HomeScreen";
import { createAppContainer } from 'react-navigation';
import {Image,StyleSheet} from "react-native-web";
import { Entypo,AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SignUpScreen from "./components/SignUpScreen";
import WeShare from "./components/WeShare";
import SettingsScreen from "./components/SettingsScreen";
import CalenderScreen from "./components/CalendarScreen";
import SignIn from "./components/SignIn";

import firebase from 'firebase';

const fireBaseConfig = {
    apiKey: "AIzaSyCSZ7E1KllQBWMjetSbqKmfW7_DdPtPYp4",
    authDomain: "ovelse5-ec2ee.firebaseapp.com",
    databaseURL: "https://ovelse5-ec2ee.firebaseio.com/",
    projectId: "ovelse5-ec2ee",
    storageBucket: "ovelse5-ec2ee.appspot.com",
    messagingSenderId: "734463752384",
    appId: "1:734463752384:web:1fc8dbf164eb8da1965525",
    measurementId: "G-RNNM8PEH2M"
};
// Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
// Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
if (!firebase.apps.length) {
    firebase.initializeApp(fireBaseConfig);
}


export default class App extends React.Component  {
    render(){
        return(
            <SignIn/>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
