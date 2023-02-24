import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IsignIn {
  password: string;
  email: string;
}

export interface IAuthProviderState {
  signedIn: boolean;
  uid?: string;
}

export type IAuthContext = {
  signIn: (arg0: IsignIn) => void;
  signOut: () => void;
  authState: IAuthProviderState;
  createUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
};
