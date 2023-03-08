import { Dispatch } from "react";
import { OverlayOptions } from "../Header/types";

export interface IMenu {
  activeOverlay: OverlayOptions;
  toggleOverlay: Dispatch<OverlayOptions>;
}
