import { ReactNode } from "react";

export interface IAuthState {
  token: string | null;
  username: string | "anon" | null;
  signedIn: boolean;
}

export interface IAuthProvider {
  children: ReactNode;
}

export type SignIn = (
  token: IAuthState["token"],
  username: IAuthState["username"]
) => void;

export interface IAuthContext {
  authState: IAuthState;
  signIn: SignIn;
  signOut: () => void;
}
