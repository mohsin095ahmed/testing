import {View, Text} from "react-native";
import Ficon from "react-native-vector-icons/FontAwesome";
import Micon from "react-native-vector-icons/MaterialIcons";
import Aicon from "react-native-vector-icons/AntDesign";
import AppNab from "../../componets/AppNab"

function Item(props){
     console.log(props.route)
    return(
        <>
          <View>
          <Text>vxvcxkvkvkc</Text>
            <View>
                <View><Aicon name ="search"/></View>
              <View><Ficon name ="chevron-left"/></View>
              <View><Micon name ="favorite-border" /> </View>
            </View>

           
          </View>
        </>
    )
}
export default Item;