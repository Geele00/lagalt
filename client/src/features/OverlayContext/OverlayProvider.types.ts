import { Dispatch } from "react";

export interface OverlayOptions {
  overlay: "filter" | "menu" | "search" | null;
  type: "close" | "open" | "toggle";
}

export interface IOverlayProvider {
  children: any;
}

export interface ContextValue {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
