import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import icons
import Entypo from "react-native-vector-icons/Entypo";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import screens
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import MainStack from "./MainStack";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#E4204C",
          tabBarInactiveTintColor: "#D1D3D2",
        }}
      >
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {},
});
