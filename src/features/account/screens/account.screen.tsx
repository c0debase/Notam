import React from "react";
import { Text } from "react-native";
import { AccountBackground, AccountCover } from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <>
      <AccountBackground>
        <AccountCover />
      </AccountBackground>
    </>
  );
};
