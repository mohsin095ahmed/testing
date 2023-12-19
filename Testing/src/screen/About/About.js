import { View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import AppNab from "../../componets/AppNab";
//import Micon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Ficon from "react-native-vector-icons/Foundation";
import Aicon from "react-native-vector-icons/AntDesign"
import Fecon from "react-native-vector-icons/Feather";
function About({navigation}){
    const Food=[
        {id:1, name:"Fast food", img:require("../../assets/Photos/Hamburger.png")},
        {id:2, name:"Italian", img: require("../../assets/Photos/Food1.png")},
        {id:3, name :"Japnease", img:require("../../assets/Photos/Food2.png")},
        {id:4, name:"Scorpion", img:require("../../assets/Photos/Scorpion.png")}
    ]
    const FoodItem=[
        {id:1, name:"Fast food", img:require("../../assets/Photos/Hamburger.png")},
        {id:2, name:"Italian", img: require("../../assets/Photos/Food1.png")},
        {id:3, name :"Japnease", img:require("../../assets/Photos/Food2.png")},
        {id:4, name:"Scorpion", img:require("../../assets/Photos/Scorpion.png")},
        {id:5, name:"Melting Cheeze", img:require("../../assets/Photos/Pizza.png") },
        {id:6, name:"Mexican Cheeze", img:require("../../assets/Photos/Pizza1.png") }
    ] 
    return(
        <>
         <View style={{backgroundColor:"#fff",height:"100%"}}>
            <View>
            {/* <View><Micon name ="favorite-border" /> </View> */}
                  <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:10}}>
                      <View style={{marginLeft:10}} ><Icon name ="menu" size={35}/></View>
                      <View style={{backgroundColor:"#F40D30", marginRight:10, height:40, width:40 , justifyContent:"center",alignItems:"center", borderRadius:30}}><Fecon color={"white"} size={30}name="search" /></View>
                  </View>

            </View>
            <View style={{marginTop:50}}>
                <Text style={{color:"#F40D30", marginLeft:20, fontSize:15, fontWeight:"800"}}>Hi Alex</Text>
                <Text style={{fontSize:18,marginLeft:20, fontWeight:"700"}}>Find your Delicious Food</Text>
                <FlatList
                contentContainerStyle={{marginTop:20, marginLeft:10}}
                   horizontal={true}
                   data={Food}
                   renderItem={({item})=>{
                    return(
                        <View>
                            <View style={{height:50, width:60, marginHorizontal:10}}><Image style={{height:"100%", width:"100%"}} source={item.img}/></View>
                            
                            <Text style={{textAlign:"center"}}>{item.name}</Text>
                        </View>
                    )
                   }}
                />
            </View>
            <View>
                <Text style={{fontSize:20, fontWeight:"900", marginLeft:20, marginTop:20}}>Populor</Text>
                <FlatList
                contentContainerStyle={{marginTop:0,
                    
                    
                }}
                   horizontal={true}
                   data={FoodItem}
                   renderItem={({item})=>{
                    return(
                        <TouchableOpacity  onPress={()=>{navigation.navigate("Project", {item})}}style={{
                            backgroundColor:"#fff",
                        borderRadius:10,
                        borderColor:"black",
                        
                        height:270, margin:10, width:160,
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 3,
                        height: 4,
                         },
                       shadowOpacity: 0.25,
                       shadowRadius: 3,
    
                         elevation: 8,
                        }}>
                            <View>
                               <Text style={{textAlign:"center", fontWeight:"800", fontSize:18,marginTop:10,}}>{item.name}</Text>
                            </View>
                            
                            
                            <View style={{height:170, width:130, marginHorizontal:10}}><Image style={{height:"100%", width:"100%", objectFit:"contain"}} source={item.img}/></View>
                            <View style={{flexDirection:"row", justifyContent:"center"}}><Ficon style={{ marginTop:1,marginRight:3,fontWeight:"700"}} size={22} color={"#F40D30"} name="dollar"/><Text style={{fontSize:18, fontWeight:"700"}}>45.3</Text></View>
                            <View style={{height:20,marginTop:10, width:20, backgroundColor:"#F40D30" , justifyContent:"center", alignSelf:"center"}}><Aicon size={19} color={"white"} name="plus"/></View>
                        </TouchableOpacity>
                    )
                   }}
                />
                     <View style={{height:80,
                        shadowColor: "#000",
                        shadowOffset: {
	                    width: 3,
	                    height: 4,
                         },
                       shadowOpacity: 0.25,
                       shadowRadius: 3,

                         elevation: 9,
                        
                        width:80, backgroundColor:"#F40D30",alignSelf:"center",marginTop:30, borderRadius:40,justifyContent:"center", alignItems:"center"}}>
                        <Text style={{color:"white", fontSize:23, fontWeight:"900"}}>Menu</Text>
                     </View>
            </View>
         </View>
            
        </>
    )
}
export default About;