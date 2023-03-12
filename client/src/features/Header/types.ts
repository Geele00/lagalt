import { Dispatch } from "react";
import { OverlayOptions } from "src/App/App.types";

export interface IHeader {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
