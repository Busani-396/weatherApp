import { StyleSheet, View } from "react-native";

function MainWrapper({children}){
    return(
        <View style={styles.f1}>
            {children}
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

export default MainWrapper;