import Ficon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import {View,TouchableOpacity, Text, Image} from "react-native";
import Aicon from "react-native-vector-icons/AntDesign";

import Item from "../Iteam/Item";
function Project({navigation, props}){
  const route = useRoute();
  const item = route.params.item;
  return(
    <>
      <View style={{backgroundColor:"white", flex:1}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <TouchableOpacity onPress={()=>{navigation.navigate("About")}}>
              <Ficon  style={{margin :10}} size={25} name ="chevron-left"/>
              </TouchableOpacity>
               
               <Ficon style={{marginTop :10, marginRight:10,}} size={25} name ="heart-o"/>          
            </View>
            <View style={{alignItems:"center"}}>
              <Text style={{fontSize:25, fontWeight:800}}>{item.name}</Text>
              <View style={{ marginTop:5,flexDirection:"row", justifyContent:"center"}}><Ficon style={{ marginTop:5,marginRight:3,fontWeight:"700"}} size={18} color={"#F40D30"} name="dollar"/><Text style={{fontSize:22, fontWeight:"700"}}>45.3</Text></View>
  
            </View>
            <View style={{height:250, width:200, alignSelf:"center"}}>
              <Image style={{height:"100%", width:"100%", objectFit:"contain"}} source={item.img}/>
            </View>
            <View style={{flexDirection:"row", justifyContent:"center"}}>
            <View style={{height:20, marginHorizontal:9, width:20, backgroundColor:"#F40D30" , justifyContent:"center", alignSelf:"center"}}><Aicon size={19} color={"white"} name="plus"/></View>
               <View><Text style={{fontSize:23,fontWeight:600}}>2</Text></View>
             <View style={{height:20,marginHorizontal:9, width:20, backgroundColor:"#F40D30" , justifyContent:"center", alignSelf:"center"}}><Aicon size={19} color={"white"} name="minus"/></View>
            </View>
          
              
              <View style={{ marginTop:5,flexDirection:"row", justifyContent:"center"}}><Ficon style={{ marginTop:5,marginRight:3,fontWeight:"700"}} size={15} color={"#F40D30"} name="dollar"/><Text style={{fontSize:17, fontWeight:"700"}}>45.3</Text></View>
  
            <View style={{flexDirection:"row", marginTop:80}}>
   
              <View style={{flexDirection:"row", marginHorizontal:6}}>
               <Image style={{height:50, width:50}} source={require("../../assets/Photos/star.jpg")}/>
               <Text style={{fontSize:17, fontWeight:700, marginTop:10}}>4.8</Text>
              </View>

              <View style={{flexDirection:"row", marginHorizontal:6}}>
               <Image style={{height:30, width:30}} source={require("../../assets/Photos/fire.png")}/>
               <Text style={{fontSize:17, fontWeight:700, marginTop:10}}>45 Callorise</Text>
              </View>

              <View style={{flexDirection:"row", marginHorizontal:6}}>
               <Image style={{height:40, width:40}} source={require("../../assets/Photos/time.jpg")}/>
               <Text style={{fontSize:17, fontWeight:700, marginTop:10}}>20 - 30 min</Text>
              </View>
            </View>    

            <TouchableOpacity style={{backgroundColor:"#F40D30", height:50, width:"80%", borderRadius:25, alignItems:"center", justifyContent:"center", alignSelf:"center", marginTop:50}}>
              <Text style={{fontSize:25, color:"white", fontWeight:"800"}}>ADD TO CART</Text>
              </TouchableOpacity>      
      </View>
     
          
    </>
  )
}
export default Project;