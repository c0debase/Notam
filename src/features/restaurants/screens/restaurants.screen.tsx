import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  padding: 16px;
  flex-grow: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantListContainer>
    </SafeArea>
  );
};
