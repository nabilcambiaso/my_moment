import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS, SIZES } from '../../assets/constants'
import { AntDesign } from '@expo/vector-icons';
import TextInputComponent from '../components/global/TextInputComponent';
function LoginScreen(props) {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <View style={{
                justifyContent: "center", alignItems: "center"
            }} >
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
                    isPassword
                />

                {/* <TouchableOpacity onPress={() => {
                props.navigation.navigate("MainScreen")
            }} >
                <Text style={{ color: "black" }} > Login Screen  </Text>
            </TouchableOpacity>    */}
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingTop: 50,
        justifyContent: "center"
    },
})
export default LoginScreen