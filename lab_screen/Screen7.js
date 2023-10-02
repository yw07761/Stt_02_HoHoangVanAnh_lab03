import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen7() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return ( <
        View style = { styles.container } >
        <
        LinearGradient colors = {
            ["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"] }
        style = {
            { width: "100%", height: "100%", alignItems: "center" } } >
        <
        View style = { styles.header } >
        <
        Text style = { styles.title } > LOGIN < /Text> <
        /View> <
        View style = { styles.inputWrapper } >
        <
        View style = { styles.inputWithIcon } >
        <
        Image source = { require('../assets/nguoi.png') }
        style = { styles.icon }
        /> <
        TextInput placeholder = "Email"
        style = { styles.input }
        /> <
        /View> <
        View style = { styles.inputWithIcon } >
        <
        Image source = { require('../assets/lock.png') }
        style = { styles.icon }
        /> <
        TextInput placeholder = 'Password'
        secureTextEntry = {!showPassword }
        style = { styles.input }
        /> <
        TouchableOpacity onPress = { toggleShowPassword }
        style = { styles.passwordToggleIcon } >
        <
        Ionicons name = { showPassword ? 'eye-off' : 'eye' }
        size = { 24 }
        color = "black" /
        >
        <
        /TouchableOpacity> <
        /View> <
        /View> <
        TouchableOpacity style = { styles.loginButton } >
        <
        Text style = { styles.loginButtonText } > LOGIN < /Text> <
        /TouchableOpacity> <
        Text style = { styles.createAccountText } > CREATE ACCOUNT < /Text> <
        /LinearGradient> <
        /View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: 80,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 30,
        marginTop: 50,
    },
    inputWrapper: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 5,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#D9BB3C',
        marginTop: 20,
        width: 380,
        height: 54,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
        paddingLeft: 40,
        borderColor: '#fff',
        borderWidth: 1,
    },
    passwordToggleIcon: {
        position: 'absolute',
        right: 20,
        marginTop: 20,
    },
    loginButton: {
        width: 380,
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#fff',
    },
    createAccountText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 50,
    },
});