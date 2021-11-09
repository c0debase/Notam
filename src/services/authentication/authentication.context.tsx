import React, { createContext, useContext, useEffect, useState } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext({});

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin: onLogin }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
