import { QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

export interface IAuthState {
  token: string | null;
  username: string | null;
  type: "user" | "anon" | null;
}

export interface IAuthProvider {
  children: ReactNode;
  queryClient: QueryClient;
}

export type SignIn = (
  token: IAuthState["token"],
  username: IAuthState["username"],
  type?: IAuthState["type"]
) => void;

export interface IAuthContext {
  authState: IAuthState;
  signIn: SignIn;
  signOut: () => void;
}
