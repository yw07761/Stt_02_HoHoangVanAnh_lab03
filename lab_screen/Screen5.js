import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Screen5() {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > LOGIN < /Text> <
        View style = { styles.inputWrapper } >
        <
        TextInput placeholder = "Email"
        style = { styles.input }
        /> <
        View style = { styles.passwordInputWrapper } >
        <
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
        View style = { styles.btnWrapper } >
        <
        TouchableOpacity style = { styles.btnLogin } >
        <
        Text style = { styles.btnLoginTxt } > LOGIN < /Text> <
        /TouchableOpacity> <
        /View> <
        View >
        <
        Text style = { styles.txtOption } > By logging in , you agree to the terms and conditions < /Text> <
        Text style = {
            [styles.txtOption, { color: '#5D25FA' }] } > Forgot your password ? < /Text> <
        Text style = { styles.txtOption } > Or login with < /Text> <
        /View> <
        View style = { styles.socialButtonWrapper } >
        <
        TouchableOpacity style = {
            [styles.socialButton, { backgroundColor: '#4267B2' }] } >
        <
        Image style = { styles.socialImage }
        source = { require('../assets/fb.png') }
        /> <
        /TouchableOpacity> <
        TouchableOpacity style = {
            [styles.socialButton, { backgroundColor: '#0058d9' }] } >
        <
        Image style = { styles.socialImage }
        source = { require('../assets/zalo.png') }
        /> <
        /TouchableOpacity> <
        TouchableOpacity style = {
            [styles.socialButton, styles.socialBorder] } >
        <
        Image style = { styles.socialImage }
        source = { require('../assets/gg.png') }
        /> <
        /TouchableOpacity> <
        /View> <
        /View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 50,
    },
    inputWrapper: {
        marginTop: 50,
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#c4c4c4',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
        paddingLeft: 10,
    },
    passwordInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordToggleIcon: {
        position: 'absolute',
        right: 20,
        marginTop: 20,
    },
    btnWrapper: {
        alignItems: 'center',
        marginTop: 50,
    },
    btnLogin: {
        backgroundColor: '#E53935',
        width: 330,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLoginTxt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
    },
    txtOption: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    socialButtonWrapper: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    socialButton: {
        width: '28%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialImage: {
        width: 35,
        height: 35,
    },
    socialBorder: {
        borderWidth: 1,
        borderColor: '#0058d9',
    },
})