import { Auth } from "firebase/auth";
import { ReactNode } from "react";

// Create user

export interface ICreateFirebaseUser {
  password: string;
  email: string;
  username: string;
}

type CreateFirebaseUser = (arg0: ICreateFirebaseUser) => CreateFirebaseUser;

export type CreateFirebaseUserCB = (
  auth: Auth,
  setAuthState: any
) => CreateFirebaseUser;

// Sign in

interface ISignIn {
  password: string;
  email: string;
}

type SignIn = (arg0: ISignIn) => void;

export type SignInCB = (auth: Auth, setAuthState: any) => SignIn;

// AuthProvider

export interface IAuthState {
  token: string | null;
  username: string | null;
}

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  authState: IAuthState;
  createFirebaseUser: (arg0: ICreateFirebaseUser) => void;
  signIn: SignIn;
  signOut: () => void;
}
