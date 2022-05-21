import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { COLORS, IMAGES, SIZES } from '../../assets/constants'
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import AvatarImageComponent from '../components/global/AvatarImageComponent';
import ProfileImagesCard from '../components/cards/ProfileImagesCard';

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
                            <AvatarImageComponent
                                image={IMAGES.profileImg}
                                size={100}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            marginTop: 10
                        }} >
                            <Text style={styles.userNameStyle} >Cambiaso Nabil</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                marginVertical: 20
                            }}
                        >
                            <TouchableOpacity style={{
                                paddingHorizontal: 30,
                                paddingVertical: 5,
                                backgroundColor: COLORS.blueDeg4,
                                borderRadius: 15
                            }} >
                                <Text style={styles.textStyle} >Follow</Text>
                            </TouchableOpacity>
                            <View style={{
                                position: "absolute",
                                right: 20,
                                flexDirection: "row"
                            }}>
                                <TouchableOpacity
                                    style={{ paddingVertical: 5, marginRight: 20 }}
                                >
                                    <Feather name="send" size={18} color={COLORS.black2} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ paddingVertical: 5 }}
                                >
                                    <Entypo name="dots-three-vertical" size={18} color={COLORS.black2} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.gridRow}>
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                        </View>
                        <View style={styles.gridRow}>
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                        </View>
                        <View style={styles.gridRow}>
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                        </View>
                        <View style={styles.gridRow}>
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                            <ProfileImagesCard />
                        </View>




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
    userNameStyle: {
        color: COLORS.black2,
        fontWeight: "bold",
        fontSize: 18
    },
    textStyle: {
        color: COLORS.white,
        fontWeight: "bold"
    },
    scrollableCard: {
        marginTop: -60,
        width: "100%",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 15,
        height: SIZES.height,
    },
    gridRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        maxWidth: 380,
        paddingHorizontal: 10
    }

})