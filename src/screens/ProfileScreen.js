import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { COLORS, IMAGES, SIZES } from '../../assets/constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen(props) {

    const Cover = () => {
        return (
            <View
                style={{ height: 150, backgroundColor: COLORS.blueDeg4 }}>
                <TouchableOpacity style={{ position: "absolute", right: 15, top: 45 }}
                    onPress={() => { }}
                    hitSlop={{ bottom: 10, left: 20, right: 10, top: 20 }}>
                    <MaterialCommunityIcons name="account-edit-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Cover />
            <View
                style={{
                    ...styles.shadow,
                    width: "90%",
                    backgroundColor: "white",
                    alignSelf: "center"
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollableCard} >
                    <View >
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            marginTop: 20
                        }} >
                            <Image style={styles.imageStyle} source={IMAGES.profileImg} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            marginTop: 10
                        }} >
                            <Text style={styles.userNameStyle} >Cambiaso Nabil</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ height: 100 }}><Text> </Text></View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: .3,
        borderColor: COLORS.blueDeg1,
        flex: 1,
        width: "100%",
        backgroundColor: "white"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.22,
        elevation: 3,
    },
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: COLORS.blueDeg3,
        borderWidth: 3
    },
    userNameStyle:{
        color: COLORS.black2,
        fontWeight: "bold",
        fontSize: 18
    },
    scrollableCard:{
        marginTop: -60,
        width: "100%",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 15,
        height: SIZES.height,


    }
})