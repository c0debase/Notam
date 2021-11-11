import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/screens/restaurants.screen";
import styled from "styled-components/native";

const NoFavoritesArea = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length ? (
        <RestaurantList
          data={favorites}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer size="large" position="bottom">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      ) : (
        <NoFavoritesArea>
          <Text>No favorites yet :(</Text>
        </NoFavoritesArea>
      )}
    </SafeArea>
  );
};
