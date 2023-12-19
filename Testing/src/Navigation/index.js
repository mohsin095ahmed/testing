import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home/Home';
import About from '../screen/About/About';
import Item from '../screen/Iteam/Item';
import Project  from '../screen/Project/Project';
import Intro from '../screen/intro/Intro';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Intro" component={Intro}/>
        <Stack.Screen options={{headerShown:false} }name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false} } name="About" component={About} />
        <Stack.Screen options={{headerShown:false} } name="Item" component={Item} />
        <Stack.Screen options={{headerShown:false} } name="Project" component={Project} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;