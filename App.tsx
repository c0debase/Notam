import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";

import { LocationContextProvider } from "./src/services/location/location.context";
const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const tabBarIcon =
    (iconName) =>
    ({ size, color }) =>
      <Ionicons name={iconName} size={size} color={color} />;

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: tabBarIcon(iconName),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ExpoStatusBar style="auto" />
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
