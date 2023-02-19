import { ReactNode } from "react";

export interface IAuthProviderState {
  loggedIn: boolean;
  username?: string;
  uuid?: string;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IlogIn {
  username: string;
  uuid: string;
}

export type IAuthContext = {
  logIn: ({ username, uuid }: IlogIn) => void;
  logOut: () => void;
} & IAuthProviderState;
