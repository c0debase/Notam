import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing faves", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading faves", e);
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{
        isLoading,
        error,
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
