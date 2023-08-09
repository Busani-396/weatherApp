import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Components/Home";
import TouchUtils from "./Components/HeaderUtils/TouchUtili";
// import { Icon } from "react-native-vector-icons/Icon";
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the desired icon pack
import { Ionicons,Entypo,AntDesign } from '@expo/vector-icons';
import DisplayDetails from "./Components/DisplayDetails";




let Stack = createNativeStackNavigator();


function App(){
  
  return (
      <NavigationContainer>
         <Stack.Navigator 
            screenOptions={
              {
                headerTitleAlign: 'center',
                headerStyle : {textAlign : 'center', backgroundColor:'#74b9ff'},
                headerTitle : ()=><Text style={{color:"#fff"}}> <Ionicons name="md-location-outline" size={20}  />
                Johannesburg</Text>,
                headerRight : ()=><TouchUtils icon={<Entypo name="dots-three-vertical" size={24} color="#fff" />}/>
              }
              }>

          <Stack.Screen name="Home" component={Home} options={{
            headerLeft : ()=><TouchUtils icon = {<AntDesign name="swap" size={24} color="#fff" />} />,
            }}/>
          <Stack.Screen name ='details' component = {DisplayDetails} />

          {/* <Stack.Screen/> */}
         </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
