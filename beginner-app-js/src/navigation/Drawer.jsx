import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import Home from "../screens/Home";
import Settings from "../screens/Settings";

// drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#E4204C",
      }}
    >
      {/* Drawer screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
