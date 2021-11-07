import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

const screenOptions = () => ({
  ...TransitionPresets.ModalPresentationIOS,
});

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none" screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
