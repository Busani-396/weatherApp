import { Text, View } from "react-native";
import { Ionicons,Entypo,Feather,AntDesign } from '@expo/vector-icons';

function BaseDetails(){
    return(
        <View style={{alignItems:'center',borderWidth:1}}>
            <View>
                <Text style={{color:'#fff'}}>23</Text>
            </View>
            <View>
                <AntDesign name="cloudo" size={24} color="#fff" />
            </View>
            <View>
                <Text style={{color:'#fff'}}>Cloudy</Text>
            </View>
        </View>
    )
}

export default BaseDetails;