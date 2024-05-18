"use client";

import { createContext, type PropsWithChildren, useContext } from "react";

type AuthProviderValues = {
  signedIn: boolean;
  signInUrl: string;
  signOutUrl: string;
};

const initialValues = {
  signedIn: false,
  signInUrl: "/",
  signOutUrl: "/",
};

const AuthContext = createContext<AuthProviderValues>(initialValues);

export const AuthProvider = ({
  values,
  children,
}: PropsWithChildren<{ values: AuthProviderValues }>) => {
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useSignedIn = () => useContext(AuthContext);
