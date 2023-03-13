import { Dispatch } from "react";
import { OverlayOptions } from "../Header.types";

export interface IMenu {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
