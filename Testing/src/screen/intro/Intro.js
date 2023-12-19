import { Image, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

function Intro({navigation}){
    const slide =[
        {
             image:require("../../assets/Photos/bike.jpg"),
             title:"FAST DELEVRY",
             description:"Fastest delevery in city and secure and honest person will be opineted him "
            },
            {
                image:require("../../assets/Photos/parsel.jpg"),
             title:"YOUR FOOD IN DOOR",
             description:"Fastest delevery in city and secure and honest person will be opineted him "
            
            }
    ]
    return(
        <AppIntroSlider
          data={slide}
          dotStyle={{height:10, width:18, backgroundColor:"rgba(255, 0, 0, 0.4)", }}
          activeDotStyle={{backgroundColor:"#F40D30",height:10, width:18,}}
          renderItem={({item})=> 
          <View style={{flex:1, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
            <View style={{height:200, width:300}}>
                <Image style={{objectFit:"contain", height:"100%", width:"100%"}} source={item.image}/>
            </View>
            <Text style={{fontSize:27, color:"#F40D30", fontWeight:"800"}} >{item.title}</Text>
            <Text style={{fontSize:19, marginHorizontal:"10%", textAlign:"center", color:"rgba(255,0,0, 0.5)" }}>{item.description}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={{backgroundColor:"#F40D30", height:50, width:"60%", alignItems:"center", justifyContent:"center", borderRadius:30, marginTop:30 }}>
                <Text style={{fontSize:25, color:"white", fontWeight:"700"}}>
                    GO TO HOME
                </Text>
            </TouchableOpacity>
          </View>}
        />
    )
}
export default Intro;