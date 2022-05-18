import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../../assets/constants'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import TextInputComponent from '../components/global/TextInputComponent';
import ActionButtonComponent from '../components/global/ActionButtonComponent';
function LoginScreen(props) {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.form} >
                <AntDesign style={{ marginBottom: 40 }} name="login" size={64} color={COLORS.blue} />

                <TextInputComponent
                    value={emailAddress}
                    onChange={(text) => setEmailAddress(text)}
                    placeholder="Email address "
                />
                <TextInputComponent
                    value={password}
                    onChange={(text) => setPassword(text)}
                    placeholder="Password"
                    isPassword={!showPassword}
                />

                <TouchableOpacity style={{ width: "80%", flexDirection: "row",marginBottom:40 }}
                    onPress={() => { setShowPassword((showPassword) => !showPassword) }} >
                    {
                        showPassword ?
                            <>
                                <AntDesign style={styles.check} name="checkcircleo" size={17} color="gray" />
                                <Text style={styles.showHidePassword} >Hide password</Text>
                            </> :
                            <>
                                <MaterialIcons style={styles.check} name="radio-button-unchecked" size={18} color="gray" />
                                <Text style={styles.showHidePassword} >Show password</Text>
                            </>
                    }

                </TouchableOpacity>

                <ActionButtonComponent
                    onPress={() => props.navigation.navigate("MainScreen")}
                    text="Log In" />

                <TouchableOpacity
                    style={{
                        width: "60%",
                        justifyContent: "center",
                        marginTop: 10,
                        flexDirection: "row"
                    }}
                    onPress={() => {
                        props.navigation.navigate("SignUpScreen")
                    }} >
                    <Text style={{ color: COLORS.darkBlue, fontWeight: "300" }} >Don't have an account?</Text>
                    <Text style={{ color: COLORS.blue, fontWeight: "600", paddingLeft: 10 }} >Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingTop: 250,
    },
    form: {
         alignItems: "center",
    },
    showHidePassword: {
        color: "gray",
        fontWeight: "500",
        paddingLeft: 10,
        marginTop: -10
    },
    check: {
        marginTop: -10
    }
})
export default LoginScreen