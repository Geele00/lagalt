import { Auth } from "firebase/auth";
import { Dispatch, ReactNode, SetStateAction } from "react";

// Create user
type SetAuthState = Dispatch<SetStateAction<IAuthState>>;

interface ICreateUser {
  password: string;
  email: string;
  username: string;
}

type CreateUser = (arg0: ICreateUser) => void;

export type CreateUserCB = (
  auth: Auth,
  setAuthState: SetAuthState
) => CreateUser;

// Sign in

interface ISignIn {
  password: string;
  email: string;
}

type SignIn = (arg0: ISignIn) => void;

export type SignInCB = (auth: Auth, setAuthState: SetAuthState) => SignIn;

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
  createUser: (arg0: ICreateUser) => void;
  signIn: SignIn;
  signOut: () => void;
}
