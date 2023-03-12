import { Dispatch } from "react";
import { OverlayOptions } from "../Header/types";

export interface ISearchBar {
  className: string;
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}
