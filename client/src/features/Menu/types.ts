import { Dispatch } from "react";
import { OverlayOptions } from "../Header/types";

export interface IMenu {
  activeOverlay: OverlayOptions;
  overlayDispatch: Dispatch<OverlayOptions>;
}
