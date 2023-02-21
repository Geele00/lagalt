import { ReactNode } from "react";

export interface IAuthProviderState {
  loggedIn: boolean;
  email?: string;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IlogIn {
  email: string;
}

export type IAuthContext = {
  logIn: ({ email }: IlogIn) => void;
  logOut: () => void;
} & IAuthProviderState;
