import {Image,TouchableOpacity, View, Text, SafeAreaView} from "react-native";
import AppNab from "../../componets/AppNab";

function Home({navigation}){
    //console.log("naviga--->", navigation)
    return(
        <>
           <SafeAreaView style={{backgroundColor:"#F40D30"}}>
               <View style={{height:450}}>
                  <Image style={{height:"100%",width:"auto", objectFit:"contain"}} source={require("../../assets/Photos/delivery-man.png")}/>
               </View>
               <View style={{height:250}}>
                      <View style={{
                        backgroundColor:"white",
                        height:220,
                        marginHorizontal:35,
                        borderRadius:15,
                        alignItems:"center",
                        alignContent:"center", alignSelf:"center"}}>
                          <Text style={{
                            fontSize:22,
                            fontWeight:"800",
                            marginHorizontal:60,
                            marginTop:15, 
                            textAlign:"center"}}>
                          Quick Delivery at your <Text style={{color:"#F40D30",}}>Doorstep</Text> 
                                                   </Text>

                          <Text style={{marginHorizontal:30, fontSize:12, textAlign:"center", marginTop:15}}>
                            Home delivery and onlione reservation system for retaurants and cafe

                          </Text>
                          <TouchableOpacity onPress={()=>{navigation.navigate("About")}} style={{backgroundColor:"#F40D30", height:50,marginTop:20, width:200, borderRadius:30, justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"white", fontSize:25, fontWeight:"700"}}>Get Started</Text>
                          </TouchableOpacity>

                      </View>
               </View>

           </SafeAreaView>
        </>
        
    )
}
export default Home;