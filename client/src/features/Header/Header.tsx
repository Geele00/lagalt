import { useRouter } from "@tanstack/react-router";
import { RefObject, useRef } from "react";
import { Logo } from "src/components";
import { Menu, SearchBar } from "src/features";
import { PopFilter } from "./PopFilter";
import { SkillsFilter } from "./SkillsFilter";
import "./style.scss";

// For computers, not mobile. Remember to test.
const closeMenu = (ref: RefObject<any>) => ref.current.unCheck();

export const Header = () => {
  const menuToggleRef = useRef<HTMLInputElement>(null);

  const {
    state: {
      currentLocation: { pathname },
    },
  } = useRouter();

  return (
    <header className="main-header">
      <section
        className="main-header__left"
        onMouseLeave={() => closeMenu(menuToggleRef)}
      >
        <Menu ref={menuToggleRef} />
        <Logo />
      </section>

      {pathname === "/" ? (
        <>
          <PopFilter />
          <SkillsFilter />
        </>
      ) : null}

      <SearchBar />
      <button className="profile-button">
        <div className="profile-button__logo">
          <div className="profile-button__logo_top"></div>
          <div className="profile-button__logo_bottom"></div>
        </div>
      </button>
    </header>
  );
};
