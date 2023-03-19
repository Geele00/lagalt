import "./CloseButton.style.scss";
import { Dispatch, PointerEvent } from "react";
import { OverlayOptions } from "../Header.types";

interface IProps {
  activeOverlay: OverlayOptions["overlay"];
  toggleOverlay: Dispatch<OverlayOptions>;
}

export const CloseButton = ({ activeOverlay, toggleOverlay }: IProps) => {
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
