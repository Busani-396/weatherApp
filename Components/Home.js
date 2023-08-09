import { Text, View, StyleSheet} from "react-native"
import TouchUtils from "./HeaderUtils/TouchUtili";
import { Ionicons,Entypo,Feather,AntDesign } from '@expo/vector-icons';
import PrimaryDisplay from "./BodyComps/PrimaryDisplay";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DisplayDetails from "./DisplayDetails";
import SecondaryDisplay from "./BodyComps/SecondaryDisplay";
import MainWrapper from "./BodyComps/MainWrapper";
import BaseDetails from "./BodyComps/BaseDetails";


const Tab =createBottomTabNavigator();
const Home = ({navigation})=>{

   
    return (
        <MainWrapper>
            <PrimaryDisplay/>
            <SecondaryDisplay navigation={navigation}/>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

              <BaseDetails/>
              <BaseDetails/>
              <BaseDetails/>
              <BaseDetails/>

                
                
            </View>
        </MainWrapper>
    )
}

const styles = StyleSheet.create({
    displayMain :{
        backgroundColor:'#74b9ff',
    },
    radiusBottom:{
        borderBottomLeftRadius: 30, // Use borderBottomLeftRadius and borderBottomRightRadius for the effect
        borderBottomRightRadius: 30,
        borderBottomWidth: 1, // Add a borderBottomWidth to simulate the border
        borderColor: 'skyblue',
    },
    f1:{
        flex : 1,
         backgroundColor:'black',
            },
    f3:{
        flex : 1,
        backgroundColor:'black',
        },
    height7 : {
        height : '70%'
    },
    displayRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:50
    },
    centerRow:{
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'center'
    },
    centerColumn:{
        // flexDirection :'row',
        alignItems:'center',
        justifyContent:'center'
    },
    padding3:{
        padding : 30
    },
    btnSm:{
        width: 80,
    height: 23,
    backgroundColor: '#74b9ff',
    borderRadius: 12, // Set the borderRadius to make it rounded
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',
    borderColor : '#fff',
    borderWidth:1  
    }
})

export default Home;