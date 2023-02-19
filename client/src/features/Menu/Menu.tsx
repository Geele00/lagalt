import { FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { IMenu } from ".";

export const Menu = ({ menuToggleRef }: IMenu) => {
  const onInput = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;

    console.log(target.checked);
  };

  const username = "weskeiser";

  return (
    <nav className="menu" aria-haspopup="menu">
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
        {/* <li role="menuitem"> */}
        {/*   <Link to="$username">Hjelp</Link> */}
        {/* </li> */}
      </ul>
    </nav>
  );
};
