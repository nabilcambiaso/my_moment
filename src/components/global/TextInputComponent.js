import {TextInput} from 'react-native'
import { COLORS } from '../../../assets/constants'




function TextInputComponent({value,onChange,placeholder,isPassword}) {
  return (
    <TextInput
    value={value}
    onChange={(e)=>onChange(e.nativeEvent.text)}
    placeholder={placeholder}
    secureTextEntry={isPassword}
    style={{paddingHorizontal:20, borderRadius:15, marginBottom:20, height:40,width:"80%",backgroundColor:COLORS.white}}
    />
  )
}

export default TextInputComponent