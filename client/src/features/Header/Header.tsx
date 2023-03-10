import "./Header.style.scss";
import { useEffect, useReducer } from "react";
import { ProfileButton } from "src/features/ProfileButton/ProfileButton";
import { SearchBar } from "src/features/SearchBar/SearchBar";
import { Menu } from "src/features/Menu/Menu";
import { Filter } from "src/features/Filter/Filter";
import { OverlayOptions } from "./types";

const reducer = (
  activeOverlay: OverlayOptions["overlay"],
  toggle: OverlayOptions
) => {
  if (toggle.action === "close") return null;
  if (toggle.action === "toggle") {
    if (toggle.overlay === activeOverlay) return null;
  }
  return toggle.overlay;
};

interface IHeader {
  routeChanged: {};
}

export const Header = ({ routeChanged }: IHeader) => {
  const [activeOverlay, toggleOverlay] = useReducer(reducer, null);

  console.log("lol");

  useEffect(() => {
    toggleOverlay({ action: "close", overlay: null });
  }, [routeChanged]);

  return (
    <header className="main-header" data-overlay={activeOverlay}>
      <Menu activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />

      {window.location.pathname === "/" && (
        <Filter activeOverlay={activeOverlay} toggleOverlay={toggleOverlay} />
      )}

      <SearchBar
        className="main-header__search-bar"
        activeOverlay={activeOverlay}
        toggleOverlay={toggleOverlay}
      />

      <ProfileButton />
    </header>
  );
};
