import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default function Screen8() {
    return ( <
        View style = { styles.container } >
        <
        Image style = { styles.eyeImage }
        source = { require('../assets/img/eyeball-3097971.png') }
        /> <
        View style = { styles.inputWrapper } >
        <
        TextInput style = { styles.input }
        placeholder = "Please input user name" / >
        <
        TextInput style = { styles.input }
        placeholder = "Please input password" / >
        <
        Image style = {
            [styles.inputIcon, styles.inputIcon1] }
        source = { require('../assets/nguoi.png') }
        /> <
        Image style = {
            [styles.inputIcon, styles.inputIcon2] }
        source = { require('../assets/lock.png') }
        /> <
        /View> <
        TouchableOpacity style = { styles.loginButton } >
        <
        Text style = { styles.loginButtonText } > LOGIN < /Text> <
        /TouchableOpacity> <
        View style = { styles.optionsWrapper } >
        <
        Text style = { styles.optionText } > Register < /Text> <
        Text style = { styles.optionText } > Forgot Password < /Text> <
        /View> <
        View style = { styles.otherLoginMethodsWrapper } >
        <
        Text style = { styles.otherLoginMethodsText } > Other Login Method < /Text> <
        /View> <
        View style = { styles.socialLoginWrapper } >
        <
        Image style = { styles.socialImage }
        source = { require('../assets/logo1.png') }
        /> <
        Image style = { styles.socialImage }
        source = { require('../assets/logo2.png') }
        /> <
        Image style = {
            [styles.socialImage, { position: 'relative' }] }
        source = { require('../assets/fb.png') }
        /> <
        Image style = { styles.facebookIcon }
        source = { require('../assets/fb.png') }
        /> <
        /View> <
        /View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    eyeImage: {
        width: 140,
        height: 140,
        marginTop: 30,
    },
    inputWrapper: {
        opacity: 0.3,
        position: 'relative',
    },
    input: {
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
        paddingLeft: 55,
        borderBottomColor: '#ccc',
        borderBottomWidth: 3,
    },
    inputIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
    },
    inputIcon1: {
        top: 30,
        left: 10,
    },
    inputIcon2: {
        left: 10,
        bottom: 15,
    },
    loginButton: {
        backgroundColor: '#386FFC',
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    loginButtonText: {
        color: '#fff',
    },
    optionsWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    optionText: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
    },
    otherLoginMethodsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    lineImage: {
        width: 90,
        height: 1,
    },
    otherLoginMethodsText: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
    },
    socialLoginWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    socialImage: {
        width: 74,
        height: 74,
    },
    facebookIcon: {
        position: 'absolute',
        width: 32,
        height: 45,
        right: 28,
        top: 10,
    },
});