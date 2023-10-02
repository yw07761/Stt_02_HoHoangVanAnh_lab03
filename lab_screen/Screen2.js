import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen2() {
    return ( <
        View style = { styles.container } >
        <
        LinearGradient colors = {
            ["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"] }
        style = { styles.background } >
        <
        View style = { styles.circle } > < /View> <
        Text style = { styles.title } > GROW YOUR BUSINESS < /Text> <
        Text style = { styles.subTitle } > We 'll help your business grow using online services.</Text> <
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
        View style = { styles.rectangle } >
        <
        Text style = { styles.rectangleText } > HOW WE WORK ? < /Text> <
        /View> <
        /LinearGradient> <
        /View>
    );
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
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "black",
        textAlign: "center",
        marginVertical: 10,
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
    rectangle: {
        width: 300,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "blue",
        marginVertical: 20,
    },
    rectangleText: {
        fontWeight: "700",
        fontSize: 18,
    },
});