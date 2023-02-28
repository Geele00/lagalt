import { RefObject, useRef } from "react";
import { Logo } from "src/components";
import { Menu, SearchBar } from "src/features";
import { ProfileButton } from "../ProfileButton";
import { PopFilter } from "./PopFilter";
import { SkillsFilter } from "./SkillsFilter";
import "./style.scss";

// For computers, not mobile. Remember to test.
const closeMenu = (ref: RefObject<any>) => ref.current.unCheck();

export const Header = () => {
  const menuToggleRef = useRef<HTMLInputElement>(null);

  return (
    <header className="main-header">
      <section
        className="main-header__burger-and-logo"
        onMouseLeave={() => closeMenu(menuToggleRef)}
      >
        <Menu ref={menuToggleRef} />
        <Logo />
      </section>

      {window.location.pathname === "/" ? (
        <section className="main-header__filters">
          <PopFilter />
          <SkillsFilter />
        </section>
      ) : null}

      <SearchBar className="main-header__search-bar" />

      <ProfileButton />
    </header>
  );
};
