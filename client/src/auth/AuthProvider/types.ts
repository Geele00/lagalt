import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IsignIn {
  password: string;
  email: string;
}

export interface IAuthState {
  token: string;
  username: string;
}

export type IAuthContext = {
  authState: IAuthState;
  signIn: (arg0: IsignIn) => void;
  signOut: () => void;
  createFirebaseUser: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
};
