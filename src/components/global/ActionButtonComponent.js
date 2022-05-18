import { Text,  TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../../assets/constants'

function ActionButtonComponent({onPress,text}) {
  return (
    <TouchableOpacity
    style={styles.actionButton}
    onPress={onPress} >
    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }} > {text}  </Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    actionButton: {
        width: "60%",
        backgroundColor: COLORS.blue,
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
})

export default ActionButtonComponent