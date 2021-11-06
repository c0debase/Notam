import React from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph, Button } from "react-native-paper";
import styled from "styled-components/native";
import { Restaurant } from "../../../models/Restaurant";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RestaurantInfoCard: React.FC = ({ restaurant }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 Willow Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCover key={name} source={{ uri: photos[0] }} />
        <RestaurantTitle>{name}</RestaurantTitle>
      </RestaurantCard>

      {/* <Card>
        <Card.Title title={name} subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card> */}
    </>
  );
};

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const RestaurantTitle = styled.Text`
  color: red;
  padding: 16px;
`;
