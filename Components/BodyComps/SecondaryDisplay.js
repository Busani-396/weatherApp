import { Ionicons,Entypo,AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import TouchUtils from '../HeaderUtils/TouchUtili';


function SecondaryDisplay({navigation}){

    const onPress = ()=>{
        //alert("Hello - B")
        navigation.navigate('details')
    }

    return (
        <View style={[styles.f3, styles.centerColumn,styles.displayRow ]}>
                <View>
                  <Text style={{fontWeight:300, fontSize:20, color:"#fff"}}>Today</Text>
                </View>
                 <View>
                    <TouchUtils 
                            title="7 day" 
                            onPressHandle={onPress}
                            iconRight={<Entypo name="chevron-small-right" size={24} color="black" />}
                            />
                 </View>
            </View>
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

export default SecondaryDisplay;