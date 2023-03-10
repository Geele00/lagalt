import { Dispatch } from "react";
import { OverlayOptions } from "../Header/types";

export interface IFilter {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
