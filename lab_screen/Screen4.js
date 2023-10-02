import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen4() {
    return ( <
        View style = { styles.container } >
        <
        LinearGradient colors = {
            ["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"] }
        style = { styles.background } >
        <
        Text style = {
            [styles.title, styles.text] } > CODE VERIFICATION < /Text> <
        Text style = { styles.instruction } > Enter the one - time password sent to < /Text> <
        View style = { styles.codeBlockWrapper } > {
            [1, 2, 3, 4, 5, 6].map((_, index) => ( <
                View key = { index }
                style = { styles.codeBlock } >
                <
                TextInput style = { styles.codeInput }
                keyboardType = "numeric"
                maxLength = { 1 }
                /> <
                /View>
            ))
        } <
        /View> <
        View style = { styles.verifyButtonWrapper } >
        <
        TouchableOpacity style = { styles.verifyButton } >
        <
        Text style = { styles.verifyButtonText } > VERIFY CODE < /Text> <
        /TouchableOpacity> <
        /View> <
        /LinearGradient> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 60,
    },
    instruction: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30,
    },
    codeBlockWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    codeBlock: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    codeInput: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    verifyButtonWrapper: {
        width: '80%',
        alignItems: 'center',
    },
    verifyButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#E3C000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifyButtonText: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 15,
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});