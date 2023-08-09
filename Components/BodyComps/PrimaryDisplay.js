import { Ionicons,Entypo,AntDesign, Feather} from '@expo/vector-icons';
import { View,Text, StyleSheet } from 'react-native';
import TouchUtils from '../HeaderUtils/TouchUtili';


function PrimaryDisplay(){
    return(
        <View style={[styles.height7, styles.radiusBottom, styles.displayMain]}>
            <View style={[ styles.centerRow, styles.padding3]}>
                <TouchUtils title="click" style={styles.btnSm}/>
            </View>
            <View style={[ styles.centerRow, styles.padding3]}>
                <TouchUtils icon = {<Feather name="cloud-snow" size={90} color="#fff" />} />
            </View>
            <View style={styles.centerRow}>
                 <Text style={{fontWeight:500, fontSize:60, color:"#fff"}}>21</Text>
            </View>
            <View style={styles.centerColumn}>
                <View>
                  <Text style={{fontWeight:300, fontSize:20, color:"#fff"}}>Thunderstom</Text>
                </View>
                 <View>
                    <Text style={{color:"#fff"}}>Thunderstom weather</Text>
                 </View>
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

export default PrimaryDisplay;