import "./CloseButton.style.scss";
import { PointerEvent } from "react";

interface IProps {
  onPointerUp: (e: PointerEvent<HTMLButtonElement>) => void;
}

export const CloseButton = ({ onPointerUp }: IProps) => {
  return (
    <button className="close-button" onPointerUp={onPointerUp}>
      X
    </button>
  );
};
