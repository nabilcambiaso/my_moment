import { Image } from 'react-native'
import { COLORS } from '../../../assets/constants'

function AvatarImageComponent({image,size}) {
  return (
      <Image style={
        {
          height: size,
          width: size,
          borderRadius: size/2,
          borderColor: COLORS.blueDeg3,
          borderWidth: 2
      }
      } source={image} />
  )
}
export default AvatarImageComponent