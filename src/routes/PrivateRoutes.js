import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

//const Stack = createNativeStackNavigator();

const Stack = createDrawerNavigator();

export default function PrivateRoutes() {
    return(
        <NavigationContainer>
             <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
             </Stack.Navigator>
        </NavigationContainer>
    );
}