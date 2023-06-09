import { OverlayOptions } from "./Overlay.Provider.types";

export const overlayReducer = (
  currentOverlay: OverlayOptions["overlay"],
  action: OverlayOptions
) => {
  const { type, overlay } = action;

  switch (type) {
    case "close":
      return null;

    case "toggle":
      if (overlay === currentOverlay) return null;

    default:
      return overlay;
  }
};
