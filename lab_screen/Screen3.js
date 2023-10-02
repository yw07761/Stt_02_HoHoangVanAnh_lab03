import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen3() {
    return ( <
        View style = { styles.container } >
        <
        LinearGradient colors = {
            ["rgba(0, 204, 249, 0.36)", "rgba(0, 204, 249, 1)"] }
        style = { styles.background } >
        <
        View style = { styles.imageWrapper } >
        <
        Image style = { styles.lockImage }
        source = { require('../assets/lock.png') }
        /> <
        /View> <
        Text style = { styles.title } > FORGET PASSWORD < /Text> <
        Text style = { styles.description } > Provide your account email to reset your password < /Text> <
        View style = { styles.emailInputWrapper } >
        <
        Image style = { styles.mailIcon }
        source = { require('../assets/email.png') }
        /> <
        TextInput style = { styles.emailInput }
        placeholder = "Email" / >
        <
        /View> <
        View style = { styles.nextButtonWrapper } >
        <
        TouchableOpacity style = { styles.nextButton } >
        <
        Text style = { styles.nextButtonText } > NEXT < /Text> <
        /TouchableOpacity> <
        /View> <
        /LinearGradient> <
        /View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
    },
    lockImage: {
        width: 100,
        height: 110,
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 50,
    },
    description: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 50,
    },
    emailInputWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
    },
    emailInput: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 15,
        paddingTop: 16,
        width: 280,
        backgroundColor: '#c4c4c4',
        borderColor: 'transparent',
    },
    mailIcon: {
        width: 50,
        height: 50,
    },
    nextButtonWrapper: {
        width: 330,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
    },
    nextButton: {
        width: 330,
        height: 50,
        backgroundColor: '#E3C000',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nextButtonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 16,
    },
})