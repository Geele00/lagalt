export enum AuthState {
  "loggedIn",
  "loggedOut",
}

export interface INavItem {
  title: string;
  to: string;
  condition?: AuthState;
  params?: {
    username?: boolean;
  };
}
