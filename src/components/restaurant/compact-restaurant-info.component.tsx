import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { restaurantsRequest } from "../../services/restaurant/restaurants.service";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

// <Image in Marker is buggy on android, as a workaround webview is used

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <>
      <Item>
        {isAndroid && <CompactWebview></CompactWebview>}
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text center variant="caption" numberOfLines={3}>
          {restaurant.name}
        </Text>
      </Item>

      <TouchableOpacity></TouchableOpacity>
    </>
  );
};
