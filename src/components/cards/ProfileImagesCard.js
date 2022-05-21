import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../../assets/constants'

function ProfileImagesCard({ }) {
    return (
        <View style={styles.cardStyle} >

        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: COLORS.blueDeg1
    }

})

export default ProfileImagesCard