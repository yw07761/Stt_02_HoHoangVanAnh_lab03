import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen1() {
    return ( <
        View style = { styles.container } >
        <
        LinearGradient colors = {
            ["rgba(0, 204, 249, 0.36)", "rgba(0, 204, 249, 1)"] }
        style = { styles.background } >
        <
        View style = { styles.circle } > < /View> <
        Text style = { styles.title } > GROW < /Text> <
        Text style = { styles.subtitle } > YOUR BUSINESS < /Text> <
        Text style = { styles.description } > We will help you grow your business online. < /Text> <
        View style = { styles.buttonContainer } >
        <
        TouchableOpacity style = { styles.button } >
        <
        Text style = { styles.buttonText } > LOGIN < /Text> <
        /TouchableOpacity> <
        TouchableOpacity style = { styles.button } >
        <
        Text style = { styles.buttonText } > SIGN UP < /Text> <
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
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 15,
        borderColor: "black",
        marginVertical: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
    },
    subtitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
        fontWeight: "700",
        marginVertical: 10,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 15,
    },
    button: {
        backgroundColor: "#E3C000",
        borderRadius: 10,
        width: 119,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});