import { Link } from "@tanstack/react-router";
import { FormEvent } from "react";
import "./Menu.scss";

interface IMenu {
  menuToggleRef: React.RefObject<HTMLInputElement>;
}

export const Menu = ({ menuToggleRef }: IMenu) => {
  const onInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;

    console.log(target.checked);
  };

  return (
    <div className="menu" aria-haspopup="menu">
      <input
        type="checkbox"
        id="burger-checkbox"
        onInput={onInput}
        ref={menuToggleRef}
      />

      <i className="menu__hamburger-icon" aria-hidden>
        <div></div>
        <div></div>
        <div></div>
      </i>

      <ul className="menu__dropdown" role="menubar">
        <li role="menuitem">
          <Link to="/">Prosjekter</Link>
        </li>
        <li role="menuitem">
          <Link to="/">FAQ</Link>
        </li>
        <li role="menuitem">
          <Link to="/">Hjelp</Link>
        </li>
      </ul>
    </div>
  );
};
