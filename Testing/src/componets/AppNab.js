import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

function AppNab({navigation}){
   // console.log("components--->", navigation);
    return(
        <>
          <View style={style.nab}>
             <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                  <Text style={style.txt}> Home </Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>{navigation.navigate("About")}}>
                  <Text style={style.txt}> About us</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>{navigation.navigate("Contact")}}>
                  <Text style={style.txt}> Contact us</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>{navigation.navigate("Project")}}>
                  <Text style={style.txt}> Project</Text>
             </TouchableOpacity>
          </View>
        </>
    )
}
const style = StyleSheet.create({
    nab :{
        flexDirection:"row",
        backgroundColor: "black",
        height:40,
        width:300
    },
    txt:{
        color:"white",
        fontSize:18,
        fontWeight:"700"

    }
})
export default AppNab;