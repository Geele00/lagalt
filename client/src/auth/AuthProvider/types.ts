import { ReactNode } from "react";

export interface IAuthProviderState {
  loggedIn: boolean;
  username?: string;
}

export interface IAuthProvider {
  children: ReactNode;
}

export type IAuthContext = {
  logIn: (username: string) => void;
  logOut: () => void;
} & IAuthProviderState;
