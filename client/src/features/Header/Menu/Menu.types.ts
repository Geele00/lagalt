import { Dispatch } from "react";
import { OverlayOptions } from "../Header.types";

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

export interface IMenu {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
