import { Dispatch, ReactNode } from "react";

export interface OverlayOptions {
  overlay: "filter" | "menu" | "search" | "profile-menu" | null;
  type: "close" | "open" | "toggle";
}

export interface IOverlayProvider {
  children: ReactNode;
}

export interface ContextValue {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
