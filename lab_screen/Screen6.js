import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Screen6() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState(1);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return ( <
            View style = { styles.container } >
            <
            Text style = { styles.title } > REGISTER < /Text> <
            View style = { styles.inputWrapper } >
            <
            TextInput style = { styles.input }
            placeholder = "Name" / >
            <
            TextInput style = { styles.input }
            placeholder = "Phone" / >
            <
            TextInput style = { styles.input }
            placeholder = "Email" / >
            <
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
            TextInput style = { styles.input }
            placeholder = "Birthday" / >
            <
            /View> <
            View style = { styles.radioWrapper } >
            <
            TouchableOpacity style = { styles.radioOption }
            onPress = {
                () => setSelectedRadio(1) } >
            <
            View style = { styles.circle } > {
                selectedRadio === 1 ? < View style = { styles.radioDot }
                /> : null} <
                /View> <
                Text style = { styles.sex } > Male < /Text> <
                /TouchableOpacity> <
                TouchableOpacity
                style = { styles.radioOption }
                onPress = {
                    () => setSelectedRadio(2) } >
                <
                View style = { styles.circle } > {
                    selectedRadio === 2 ? < View style = { styles.radioDot }
                    /> : null} <
                    /View> <
                    Text style = { styles.sex } > Female < /Text> <
                    /TouchableOpacity> <
                    /View> <
                    View style = { styles.btnRegisterWrapper } >
                    <
                    TouchableOpacity style = { styles.btnRegister } >
                    <
                    Text style = { styles.btnRegisterTxt } > REGISTER < /Text> <
                    /TouchableOpacity> <
                    /View> <
                    Text style = { styles.agreeTxt } > By registering,
                    you agree to the terms and conditions < /Text> <
                    /View>
                );
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
                    marginTop: 20,
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
                radioWrapper: {
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginRight: 120,
                },
                radioOption: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                circle: {
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#000',
                    width: 20,
                    height: 20,
                    marginTop: 20,
                    marginLeft: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                radioDot: {
                    borderRadius: 50,
                    backgroundColor: '#000',
                    width: 10,
                    height: 10,
                },
                sex: {
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    marginTop: 20,
                    marginLeft: 10,
                },
                btnRegisterWrapper: {
                    alignItems: 'center',
                    marginTop: 20,
                },
                btnRegister: {
                    backgroundColor: '#E53935',
                    width: 330,
                    height: 54,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                btnRegisterTxt: {
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: 25,
                    color: '#fff',
                },
                agreeTxt: {
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    marginTop: 20,
                    textAlign: 'center',
                },
            });