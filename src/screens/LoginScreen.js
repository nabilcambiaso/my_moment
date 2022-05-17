import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { COLORS } from '../../assets/constants'
function LoginScreen (props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
             props.navigation.navigate("MainScreen")
        }} >
        <Text style={{color:"white"}} > Login Screen  </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:COLORS.darkBlue
}
})
export default LoginScreen