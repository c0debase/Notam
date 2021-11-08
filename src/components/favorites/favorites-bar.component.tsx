import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => (
  <FavoritesWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favorites.map((restaurant) => {
        const key = restaurant.name.split(" ").join("");
        return (
          <Spacer position="left" size="medium" key={key}>
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetail", { restaurant })}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        );
      })}
    </ScrollView>
  </FavoritesWrapper>
);
