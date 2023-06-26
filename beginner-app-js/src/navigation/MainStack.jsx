import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import app screen here
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Details from "../screens/Details";
import Drawer from "./Drawer";

// Stack will receive a MainStackParamList - Type
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* screens here */}
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
