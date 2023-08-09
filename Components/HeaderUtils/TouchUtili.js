import { Text, TouchableOpacity } from "react-native"


const TouchUtils = ({icon=null, iconRight = '',title=null, size="", style={} , onPressHandle=null})=>{
    return(
        <TouchableOpacity style={style} onPress ={onPressHandle}>
        <Text style={[{color:'#fff'}]}>{icon}{title}{iconRight}</Text>
      </TouchableOpacity>
    )
}

export default TouchUtils