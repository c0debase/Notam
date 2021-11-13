import React, { useContext, useState } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";
import { Navigation } from "../../../infrastructure/navigation";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  // const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = error || locationError;

  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Unable to retrieve data</Text>
        </Spacer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer size="large" position="bottom">
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
