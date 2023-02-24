import { Auth } from "firebase/auth";
import { ReactNode } from "react";

export interface IAuthProvider {
  children: ReactNode;
}

export interface IsignIn {
  password: string;
  email: string;
}

export type IAuthContext = {
  signIn: (arg0: IsignIn) => void;
  signOut: () => void;
  createUser: any;
  auth: Auth;
  authState: any;
};
