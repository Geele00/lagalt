import "./CloseButton.style.scss";
import { PointerEvent } from "react";
import { useOverlay } from "src/features/OverlayContext/OverlayProvider";

export const CloseButton = () => {
  const { activeOverlay, toggleOverlay } = useOverlay();

  const closeOverlay = (e: PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleOverlay({ overlay: null, type: "close" });
  };

  return (
    <button
      className="close-button"
      onPointerUp={closeOverlay}
      disabled={activeOverlay === null}
    >
      <div></div>
      <div></div>
    </button>
  );
};
