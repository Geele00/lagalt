export interface IApp {
  routeChanged: {};
}

export interface OverlayOptions {
  overlay: "filter" | "menu" | "search" | null;
  type: "close" | "open" | "toggle";
}
