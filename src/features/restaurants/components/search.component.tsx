import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
