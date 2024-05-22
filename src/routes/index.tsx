import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Routes: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarStyle: { height: 84 },
        headerTitle: (props) => (
          <AntDesign name="twitter" size={24} color={theme.colors.primary} />
        ),
        headerTitleAlign: "center",
        headerLeft: (props) => (
          <Image
            style={{ width: 32, height: 32, borderRadius: 20, marginLeft: 10 }}
            source={{ uri: "https://github.com/v7freitas.png" }}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
        name="Search"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="bells" size={size} color={color} />
          ),
        }}
        name="Notification"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="mail" size={size} color={color} />
          ),
        }}
        name="Message"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default Routes;
