import { ButtonHTMLAttributes } from "react";
import "./NavArrowBtn.style.scss";

interface Props extends HTMLButtonElement {
  className: string;
  ["data-direction"]: "right" | "left" | "up" | "down";
}
export const NavArrowBtn = (props: ButtonHTMLAttributes<Props>) => {
  //@ts-ignore
  const direction = props["data-direction"];
  // console.log(direction);

  return (
    <button
      {...props}
      className={`${props.className} nav-arrow`}
      data-direction={direction}
    >
      <img src="/images/arrow-vector.svg" alt={`arrow ${direction} button`} />
    </button>
  );
};

export default NavArrowBtn;
